from fastapi import APIRouter

vacancies_router = APIRouter(
    prefix= "/vacancy",
    tags = ["vacancy"]
)

@vacancies_router.post("/")
async def post_vacancy(item):
    return f"{item}"
@vacancies_router.get("/search")
async def get_vacancy_search(id:int = 0):
    return f"{id}"
@vacancies_router.get("/{id}")
async def get_vacancy(id:int = 0):
    return f"{id}"
@vacancies_router.get("/{id}/responses")
async def get_vacancy_responses(id:int = 0):
    return f"{id}"
@vacancies_router.get("/{id}/task")
async def get_vacancy_task(id:int = 0):
    return f"{id}"
