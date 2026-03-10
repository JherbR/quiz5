Movie Genre Recommender | Django & React Integration
This project is a specialized AI chat platform designed to suggest films based on specific moods or genres. It uses a Django REST Framework backend and a React/Redux frontend to provide a seamless, authenticated experience where users can manage their conversation history.

Features
Secure Authentication: User registration and login using JWT tokens stored in localStorage.

Scoped AI Logic: An AI assistant strictly limited to suggesting exactly three movies with a one-sentence hook per film.

Conversation Management: Users can create, list, and view details of their unique chat histories.

State Management: Redux handles the global state for authentication and chat data on the frontend.

WHEN CLONING

git clone https://github.com/JherbR/quiz5
cd backend

INSTALL DEPENDENCIES

pip install -r requirements.txt

put your gemini api key in the .env

RUN MIGRATIONS

py manage.py migrate

RUNSERVER

py manage.py runserver

Project Structure
Backend (Django)
The backend is organized into three primary applications under the /api/v1 base route:

1. Authentication App (auth)

POST /api/v1/auth/signup/: Register a new user.

POST /api/v1/auth/signin/: Obtain JWT tokens via MyTokenObtainPairView.

2. Conversations App (conversations)

POST /api/v1/conversation/: Create a new chat and send the first prompt.

GET /api/v1/conversations/: List all conversations belonging to the logged-in user.

GET /api/v1/conversations/<id>/: Retrieve the message history for a specific conversation.

3. Base App (base_app)

Handles main URL routing and project-wide settings.
