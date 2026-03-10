from django.conf import settings
from google import genai
from google.genai import types
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Conversation, Message
from .serializers import ConversationSerializer

client = genai.Client(api_key=settings.GEMINI_API_KEY)

def get_movie_recommendations(user_query):
    config = types.GenerateContentConfig(
        system_instruction=(
            "You are a Movie Genre Recommender. "
            "Suggest exactly three movies based on the user's requested feeling or genre. "
            "For each movie, provide only the title and a one-sentence hook. "
            "Do not provide spoilers, do not list the cast, and do not provide a plot summary. "
            "If the user asks for anything other than movie recommendations, politely refuse."
        ),
    )
    
    response = client.models.generate_content(
        model='gemini-3.1-flash-lite-preview',
        contents=user_query,
        config=config
    )
    return response.text

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def chat_view(request):
    prompt = request.data.get('content')
    
    if not prompt:
        return Response({"error": "No content provided"}, status=400)
    conversation = Conversation.objects.create(user=request.user, title=prompt[:50]) 
    Message.objects.create(conversation=conversation, role='user', content=prompt)
    ai_content = get_movie_recommendations(prompt)
    Message.objects.create(conversation=conversation, role='assistant', content=ai_content)
    serializer = ConversationSerializer(conversation)
    return Response(serializer.data)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def conversation_list_view(request):
    conversations = Conversation.objects.filter(user=request.user).order_by('-updated_at')
    serializer = ConversationSerializer(conversations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def conversation_detail_view(request, id):
    try:
        conversation = Conversation.objects.get(_id=id, user=request.user)
        serializer = ConversationSerializer(conversation)
        return Response(serializer.data)
    except Conversation.DoesNotExist:
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)