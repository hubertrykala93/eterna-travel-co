from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class CurrencyAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        print("Request Session -> ", request.session.items())
        activeCurrency = request.session.get("activeCurrency", None)
        print("Active Currency -> ", activeCurrency)

        return Response(
            data={
                "currency": activeCurrency,
            }, status=status.HTTP_200_OK,
        )

    def put(self, request, *args, **kwargs):
        currency = request.data.get("currency")

        request.session["activeCurrency"] = currency
        request.session.modified = True

        return Response(
            data={
                "status": True,
                "message": "Currency changed successfully."
            },
            status=status.HTTP_200_OK,
        )
