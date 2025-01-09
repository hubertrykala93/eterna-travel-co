from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import NewsletterSerializer


class CreateNewsletterAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = NewsletterSerializer(data=request.data)
        request.data["data_processing"] = request.data.pop("dataProcessing", False)

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
                key.replace("data_processing", "dataProcessing"): str(value[0])
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
