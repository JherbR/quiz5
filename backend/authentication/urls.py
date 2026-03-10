from django.urls import path
from .views import register_view, MyTokenObtainPairView

urlpatterns = [
    path('signup/', register_view, name='register'),
    path('signin/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]