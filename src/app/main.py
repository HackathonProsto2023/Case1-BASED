from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.app.responses.routers import response_router
from src.app.users.routers import users_router
from src.app.vacancies.routers import vacancies_router

app = FastAPI(
    title= "Hi Mark"
)

# front-end availability
origins = [
    "http://localhost:3000"
    "http://localhost:8000"
    "http://localhost"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTION", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                    "Authorization"],
)

app.include_router(response_router)
app.include_router(users_router)
app.include_router(vacancies_router)