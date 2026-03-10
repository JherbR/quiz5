from django.urls import path
from .views import chat_view, conversation_list_view, conversation_detail_view

urlpatterns = [
    path('conversation/', chat_view, name='chat-create'),
    path('conversations/', conversation_list_view, name='chat-list'),
    path('conversations/<uuid:id>/', conversation_detail_view, name='chat-detail'),
]