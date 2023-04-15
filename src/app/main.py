from fastapi import FastAPI

from src.app.responses.routers import response_router
from src.app.users.routers import users_router
from src.app.vacancies.routers import vacancies_router

app = FastAPI(
    title= "Hi Mark"
)

app.include_router(response_router)
app.include_router(users_router)
app.include_router(vacancies_router)