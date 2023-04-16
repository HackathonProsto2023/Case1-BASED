from fastapi import APIRouter

response_router = APIRouter(
    prefix="/response",
    tags=["response"]
)


@response_router.post("/")
async def add_response(item):
    return f"{item}"


@response_router.get("/{id_}")
async def get_response(id_: int):
    return f"{id_}"


@response_router.post("/{id_}/answer")
async def add_response_answer(id_: int):
    return f"{id_}"
