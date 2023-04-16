from fastapi import APIRouter, Depends, Body
from fastapi.exceptions import HTTPException

from sqlalchemy import insert, select, update
from sqlalchemy.ext.asyncio import AsyncSession

from .models import *
from .schemas import *
from src.app.database import get_async_session
from ..skills.models import applicant_skill, skill

users_router = APIRouter(
    tags=["users"]
)


@users_router.post("/city", status_code=200)
async def add_city(city_name: str = Body(..., embed=True), session: AsyncSession = Depends(get_async_session)):
    query = select(city).where(city.c.name == city_name)
    result = await session.execute(query)
    city_data = dict(result.mappings().one())

    if city_data:
        statement = insert(city).values(name=city_name)
        await session.execute(statement)
        await session.commit()


@users_router.get("/all_cities", status_code=200)
async def get_all_cities(session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(city)
        result = await session.execute(query)
        return {
            "data": list(result.mappings().all())
        }
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@users_router.post("/registration", status_code=200)
async def add_user(user_: User, session: AsyncSession = Depends(get_async_session)):
    try:
        assert user_.role in ["applicant", "company", "recruiter"]

        query = select(user).where(user.c.login == user_.login)
        result = await session.execute(query)
        data = result.all()
        if data:
            raise HTTPException(
                status_code=400,
                detail="Login already exists"
            )

        query = select(city)
        result = await session.execute(query)
        default_city = dict(result.mappings().first())

        statement = insert(profile).values(name="", city_id=default_city["id"], description="").returning(profile)
        result = await session.execute(statement)
        profile_data = dict(result.mappings().one())
        profile_data.pop("city_id")
        profile_data["city"] = default_city

        statement = insert(user).values(**user_.dict(), profile_id=profile_data["id"]).returning(user)
        result = await session.execute(statement)
        user_data = dict(result.mappings().one())
        user_data.pop("profile_id")
        user_data["profile_id"] = profile_data

        await session.commit()
        return {
            "data": user_data
        }
    except HTTPException:
        raise
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


@users_router.post("/login", status_code=200)
async def login(user_: User, session: AsyncSession = Depends(get_async_session)):
    try:
        assert user_.role in ["applicant", "company", "recruiter"]

        query = select(user).where(user.c.login == user_.login and user.c.role == user_.role)
        result = await session.execute(query)
        data = dict(result.mappings().one())
        if data:
            query = select(profile).where(profile.c.id == data["profile_id"])
            result = await session.execute(query)
            profile_ = dict(result.mappings().one())

            query = select(city).where(city.c.id == profile_["city_id"])
            result = await session.execute(query)
            city_ = dict(result.mappings().one())

            profile_.pop("city_id")
            profile_["city"] = city_

            if user_.role == "applicant":
                query = select(applicant_skill).where(applicant_skill.c.applicant_id == data["id"])
                result = await session.execute(query)
                skills = tuple(map(lambda x: x[0], result.all()))
                query = select(skill.c.name).where(
                    skill.c.id.in_(skills)
                )
                result = await session.execute(query)
                skills = list(map(lambda x: x[0], result.all()))
                data["skills"] = skills

            data.pop("profile_id")
            data["profile"] = profile_
            return {
                "data": data
            }
        raise HTTPException(
            status_code=400,
            detail="User not found",
        )
    except HTTPException:
        raise
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


# @users_router.get("/profile/{id_}")
# async def get_profile(id_: int):
#
#     return f"{item}"


@users_router.put("/profile/{id_}", status_code=200)
async def update_profile(id_: int, profile_: ProfileUpdate, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(city).where(city.c.id == profile_.city_id)
        result = await session.execute(query)
        city_data = dict(result.mappings().one())

        if not city_data:
            HTTPException(
                status_code=400,
                detail="City not found"
            )

        statement = update(profile).where(profile.c.id == id_).values(**profile_.dict())
        await session.execute(statement)
        await session.commit()
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )

