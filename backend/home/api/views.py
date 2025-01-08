from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(http_method_names=["GET"])
def hello_world(request):
    return Response(
        data={
            "message": "Hello Eterna Travel Co.!",
        }
    )
