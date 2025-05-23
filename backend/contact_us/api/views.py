from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactMessageSerializer


class SendContactMessageAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactMessageSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                data={
                    "status": True,
                    "message": "Successfully sent."
                },
                status=status.HTTP_200_OK
            )

        else:
            return Response(
                data={
                    "status": False,
                    "error": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST
            )
