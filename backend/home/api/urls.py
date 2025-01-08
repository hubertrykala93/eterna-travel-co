from django.urls import path
from . import views as home_views

urlpatterns = [
    path("api/v1/home", home_views.hello_world, name="home"),
]