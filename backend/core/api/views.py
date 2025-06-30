from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class CurrenciesAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        active_currency = request.session.get("active_currency", None)

        return Response(
            data={
                "currency": active_currency,
            }, status=status.HTTP_200_OK,
        )

    def put(self, request, *args, **kwargs):
        currency = request.data.get("currency")

        request.session["active_currency"] = currency
        request.session.modified = True

        return Response(status=status.HTTP_200_OK)


class LanguagesAPIView(APIView):
    def get(self, request, *args, **kwargs):
        active_language = request.session.get("active_language")

        return Response(
            data={
                "language": active_language,
            },
            status=status.HTTP_200_OK,
        )

    def put(self, request, *args, **kwargs):
        language = request.data.get("language")

        request.session["active_language"] = language
        request.session.modified = True

        return Response(status=status.HTTP_200_OK)
