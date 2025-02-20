from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from accounts.models import User
from .serializers import RegisterSerializer
from django.db import transaction
from django.template.loader import render_to_string
import os
from .tokens import token_generator
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
from smtplib import SMTPException, SMTPAuthenticationError
from django.db import IntegrityError, DatabaseError
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken


class RegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if User.objects.filter(username=request.data.get("username")).exists():
            return Response(
                data={
                    "errors": "User with this username already exists.",
                    "code": "username_exists",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(email=request.data.get("email")).exists():
            return Response(
                data={
                    "errors": "User with this email already exists.",
                    "code": "email_exists",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        if request.data.get("password") != request.data.get("repassword"):
            return Response(
                data={
                    "errors": "The confirmation password does not match the entered password.",
                    "code": "password_not_same"
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            try:
                with transaction.atomic():
                    user = User(
                        username=serializer.validated_data.get("username"),
                        email=serializer.validated_data.get("email"),
                    )
                    user.set_password(serializer.validated_data.get("password"))

                    user.save()

                    token = token_generator.make_token(user=user)

                    html_message = render_to_string(
                        template_name="accounts/accounts-activation.html",
                        context={
                            "domain": os.environ.get("FRONTEND_URL"),
                            "email": user.email,
                            "token": token,
                        },
                        request=request,
                    )
                    plain_message = strip_tags(html_message)

                    message = EmailMultiAlternatives(
                        subject="Account Activation Request",
                        body=plain_message,
                        from_email=os.environ.get("EMAIL_HOST_USER"),
                        to=[user.email],
                    )
                    message.attach_alternative(
                        content=html_message,
                        mimetype="text/html",
                    )
                    message.send()

                    return Response(
                        data={
                            "detail": "User has been successfully registered",
                            "success": True,
                            "data": serializer.data,
                        },
                        status=status.HTTP_201_CREATED,
                    )

            except SMTPException as e:
                return Response(
                    data={
                        "detail": "Failed to send the email due to SMTP configuration issues.",
                        "code": "smtp_exception",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except SMTPAuthenticationError:
                return Response(
                    data={
                        "detail": "Authentication with the email server failed.",
                        "code": "smtp_authentication_error",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except ConnectionRefusedError:
                return Response(
                    data={
                        "detail": "Unable to connect to the email server.",
                        "code": "connection_refused_error",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except TimeoutError:
                return Response(
                    data={
                        "detail": "Connection to the email server timed out.",
                        "code": "timeout_error",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except IntegrityError:
                return Response(
                    data={
                        "detail": "Integrity error occured.",
                        "code": "integrity_error",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except DatabaseError:
                return Response(
                    data={
                        "detail": "Database integrity error.",
                        "code": "database_error",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except Exception:
                return Response(
                    data={
                        "detail": "An unexpected error occured.",
                        "code": "unknown_error",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

        else:
            errors = {key: str(error[0]) for key, error in serializer.errors.items()}

            return Response(
                data={
                    "errors": errors,
                    "code": "validation_errors",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class AccountActivationAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        email = request.query_params.get("email", None)
        token = request.query_params.get("token", None)

        if not email:
            return Response(
                data={
                    "error": "There is not email in query params.",
                    "code": "invalid_data",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not token:
            return Response(
                data={
                    "error": "There is not token in query params.",
                    "code": "invalid_data",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user = User.objects.get(email=email)

            if user.is_verified:
                return Response(
                    data={
                        "detail": "User has been already verified.",
                        "code": "already_verified",
                    },
                    status=status.HTTP_200_OK,
                )

            if not token_generator.check_token(user=user, token=token):
                return Response(
                    data={
                        "error": "Activation token is incorrect.",
                        "code": "invalid_data",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            user.is_verified = True
            user.save()

            return Response(
                data={
                    "detail": "Account has been successfully verified.",
                    "success": True,
                },
                status=status.HTTP_200_OK,
            )

        except User.DoesNotExist:
            return Response(
                data={
                    "error": "User does not exists.",
                    "code": "user_does_not_exists",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        except Exception as e:
            return Response(
                data={
                    "errors": "An unexpected error occurred.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class LoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get("email", None)
        password = request.data.get("password", None)

        if not email or not password:
            return Response(
                data={
                    "error": "Invalid data.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user = User.objects.get(email=email)

            if user.check_password(raw_password=password.strip()):
                refresh = RefreshToken.for_user(user=user)

                return Response(
                    data={
                        "detail": "Login successful.",
                        "refresh_token": str(refresh),
                        "access_token": str(refresh.access_token),
                        "data": {
                            "id": user.id,
                            "username": user.username,
                            "email": user.email,
                        },
                        "success": True,
                    },
                    status=status.HTTP_200_OK,
                )

            else:
                return Response(
                    data={
                        "error": "Incorrect email or password.",
                        "code": "incorrect_data",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

        except User.DoesNotExist:
            return Response(
                data={
                    "error": "Incorrect email or password.",
                    "code": "incorrect_data",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        except Exception as e:
            return Response(
                data={
                    "error": "An unexpected error occured.",
                    "code": "unknown_error",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
