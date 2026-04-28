from django.urls import path
from . import views

urlpatterns = [
    path('',views.home),
    path('webradio/',views.home),
    path(r'webradio/emission/(\d+)',views.emission),
]