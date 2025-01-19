from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import NewsletterSerializer
from home.models import Newsletter


class CheckEmailExistsAPIView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get("email", None)
        print("Received email:", email)

        if email and Newsletter.objects.filter(email=email).exists():
            print("Email exists in the database.")
            return Response(
                data={
                    "message": "This email address is already registered for the newsletter.",
                    "success": False,
                    "emailExists": True,
                },
                status=status.HTTP_409_CONFLICT,
            )
        else:
            print("Email does not exist in the database.")
            return Response(
                data={
                    "message": "This email address is available for registration.",
                    "success": True,
                    "emailExists": False,
                },
                status=status.HTTP_200_OK,
            )


class CreateNewsletterAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = NewsletterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                data={
                    "message": "Newsletter has been created successfully.",
                    "success": True,
                    "data": serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )

        else:
            errors = {
                key: str(value[0])
                for key, value
                in serializer.errors.items()
            }

            return Response(
                data={
                    "message": "Validation failed.",
                    "success": False,
                    "errors": errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
