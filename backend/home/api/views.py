from rest_framework.decorators import api_view
from rest_framework.response import Response
import os
from django.conf import settings


@api_view(http_method_names=["GET"])
def hello_world(request):
    os.path.join(settings.BASE_DIR, "media")
    return Response(
        data={
            "message": os.path.join(settings.BASE_DIR, "media"),
        }
    )
