from fastapi import APIRouter, Depends, Body
from fastapi.exceptions import HTTPException

from sqlalchemy import insert, select
from sqlalchemy.ext.asyncio import AsyncSession

from .models import *
from .schemas import *
from src.app.database import get_async_session

users_router = APIRouter(
    tags=["users"]
)


@users_router.post("/city")
async def add_city(city_name: str = Body(..., embed=True), session: AsyncSession = Depends(get_async_session)):
    statement = insert(city).values(name=city_name)
    await session.execute(statement)
    await session.commit()


@users_router.post("/registration")
async def add_user(user_: UserCreate, session: AsyncSession = Depends(get_async_session)):
    try:
        assert user_.role in ["applicant", "company", "recruiter"]

        query = select(city).where(city.c.name == "Санкт-Петербург")
        default_city = await session.execute(query)

        statement = insert(profile).values(name="", city_id=default_city.one()[0], description="").returning(profile)
        result = await session.execute(statement)
        profile_data = {column.key: value for column, value in zip(profile.columns, result.one())}

        statement = insert(user).values(**user_.dict(), profile_id=profile_data["id"]).returning(user)
        result = await session.execute(statement)
        user_data = result.one()

        print(profile_data)
        user_data = user_data[:3] + tuple(profile_data)

        await session.commit()
        return {
            "status": 200,
            "data": {column.key: value for column, value in zip(user.columns, user_data)}
        }
    except AssertionError:
        raise HTTPException(
            status_code=400,
            detail="Incorrect role"
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@users_router.get("/test")
def test():
    pass


@users_router.get("/profile")
async def get_profile(item):
    return f"{item}"


@users_router.put("/profile")
async def update_profile(item):
    return f"{item}"
