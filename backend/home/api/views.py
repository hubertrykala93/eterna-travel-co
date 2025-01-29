from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import NewsletterSerializer
from home.models import Newsletter
from django.db import transaction
from django.db import IntegrityError, DatabaseError
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives
import os
from smtplib import SMTPException, SMTPAuthenticationError
from django.contrib.sites.shortcuts import get_current_site


class NewsletterActivationAPIView(APIView):
    def get(self, request, *args, **kwargs):
        email = request.GET.get("email", None)
        token = request.GET.get("token", None)

        if not email or not token:
            return Response(
                data={
                    "detail": "Both email and token are required.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            newsletter = Newsletter.objects.get(email=email)

            if newsletter.active:
                return Response(
                    data={
                        "detail": "Newsletter has been already activated.",
                        "code": "already_activated",
                    },
                    status=status.HTTP_200_OK,
                )

            if str(newsletter.token) != token:
                return Response(
                    data={
                        "detail": "Invalid activation token.",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            newsletter.active = True
            newsletter.save()

            return Response(
                data={
                    "detail": "Newsletter has been activated successfully.",
                    "code": "activation_success",
                    "success": True,
                },
                status=status.HTTP_200_OK,
            )

        except Newsletter.DoesNotExist as e:
            return Response(
                data={
                    "detail": "Newsletter does not exists.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        except Exception as e:
            return Response(
                data={
                    "detail": "An unexpected error occurred.",
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class CreateNewsletterAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = NewsletterSerializer(data=request.data)

        if serializer.is_valid():
            if Newsletter.objects.filter(email=serializer.validated_data.get("email")).exists():
                return Response(
                    data={
                        "detail": "Email unique validation failed.",
                        "errors": {
                            "email": "Email already registered."
                        },
                    },
                    status=status.HTTP_409_CONFLICT,
                )

            try:
                with transaction.atomic():
                    newsletter = serializer.save()

                    html_message = render_to_string(
                        template_name="home/newsletter-activation.html",
                        context={
                            "domain": get_current_site(request=request),
                            "email": newsletter.email,
                            "token": newsletter.token,
                        },
                        request=request,
                    )

                    plain_message = strip_tags(html_message)

                    message = EmailMultiAlternatives(
                        subject="Newsletter Activation Request",
                        body=plain_message,
                        from_email=os.environ.get("EMAIL_HOST_USER"),
                        to=[newsletter.email]
                    )
                    message.attach_alternative(content=html_message, mimetype="text/html")
                    message.send()

                    return Response(
                        data={
                            "detail": "Newsletter has been created successfully.",
                            "success": True,
                            "data": serializer.data,
                        },
                        status=status.HTTP_201_CREATED,
                    )

            except SMTPException as e:
                return Response(
                    data={
                        "detail": "Failed to send the email due to SMTP configuration issues.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except SMTPAuthenticationError:
                return Response(
                    data={
                        "detail": "Authentication with the email server failed.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except ConnectionRefusedError:
                return Response(
                    data={
                        "detail": "Unable to connect to the email server.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except TimeoutError:
                return Response(
                    data={
                        "detail": "Connection to the email server timed out.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )


            except IntegrityError:
                return Response(
                    data={
                        "detail": "Integrity error occured.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except DatabaseError:
                return Response(
                    data={
                        "detail": "Database integrity error.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            except Exception:
                return Response(
                    data={
                        "detail": "An unexpected error occured.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

        else:
            errors = {
                key: str(value[0])
                for key, value
                in serializer.errors.items()
            }

            return Response(
                data={
                    "detail": "Validation failed.",
                    "errors": errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
