from fastapi import APIRouter

users_router = APIRouter(
    tags = ["users"]
)

@users_router.get("/")
async def home_page(item):
    return f"{item}"
@users_router.post("/registration")
async def registration(item):
    return f"{item}"

@users_router.get("/get_profile")
async def get_profile(item):
    return f"{item}"

@users_router.post("/post_profile")
async def post_profile(item):
    return f"{item}"