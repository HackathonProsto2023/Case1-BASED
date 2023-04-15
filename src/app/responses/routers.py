from fastapi import APIRouter

response_router = APIRouter(
    prefix="/response",
    tags=["response"]
)


@response_router.post("/")
async def post_response(item):
    return f"{item}"


@response_router.get("/{id}")
async def get_response(id: int = 0):
    return f"{id}"


@response_router.post("/{id}/answer")
async def post_response(id: int = 0):
    return f"{id}"
