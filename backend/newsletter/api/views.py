import os

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from newsletter.models import Newsletter
from .serializers import NewsletterSerializer


class CreateNewsletter(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = NewsletterSerializer(data=data)

        if Newsletter.objects.filter(email=request.data.get("email")).exists():
            return Response(
                data={
                    "status": False,
                    "error": {
                        "uniqueError": "Newsletter with this email already exists."
                    },
                },
                status=status.HTTP_409_CONFLICT,
            )

        if serializer.is_valid():
            serializer.save()

            try:
                html_message = render_to_string(
                    template_name="newsletter/welcome-newsletter-email.html",
                    context={
                        "email": serializer.validated_data.get("email"),
                    })

                plain_message = strip_tags(html_message)

                message = EmailMultiAlternatives(
                    subject="Thank you for subscribing to our newsletter.",
                    body=plain_message,
                    from_email=os.environ.get("EMAIL_HOST_USER"),
                    to=[serializer.validated_data.get("email")]
                )

                message.attach(content=html_message, mimetype="text/html")
                message.send(fail_silently=False)

                return Response(
                    data={
                        "status": True,
                        "message": "Successfully created"
                    },
                    status=status.HTTP_201_CREATED
                )

            except Exception:
                return Response(
                    data={
                        "status": False,
                        "error": "Something went wrong, please try again later.",
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

        return Response(
            data={
                "status": False,
                "error": serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )
