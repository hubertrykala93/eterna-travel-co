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


class RegisterAPIView(APIView):
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
                        username=serializer.data.get("username"),
                        email=serializer.data.get("email"),
                    )
                    user.set_password(serializer.data.get("password"))
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
    pass
