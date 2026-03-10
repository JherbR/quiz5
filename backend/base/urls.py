from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('v1/auth/', include('authentication.urls')),
    path('v1/', include('conversations.urls')),
]