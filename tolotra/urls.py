from django.urls import path
from . import views

urlpatterns = [
    path('tolotra/',views.home),
    path(r'tolotra/filter/([0-3])',views.filter),
]