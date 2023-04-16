from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
import sqlalchemy.exc

from src.app.database import get_async_session
from src.app.companies.schemas import *
from src.app.companies.models import *

from sqlalchemy import insert, select, update, delete

from src.app.users.models import user, city

company_router = APIRouter(
    prefix="/company",
    tags=["company"]
)


@company_router.post("/{id_}/vacancy")
async def create_vacancy(id_: int, item: VacancyCreate, session: AsyncSession = Depends(get_async_session)):
    try:
        statement = insert(vacancy).values(**item.dict(), company_id=id_).returning(vacancy)
        result = await session.execute(statement)
        vacancy_data = dict(result.mappings().one())

        query = select(profile).where(profile.c.id == id_)
        result = await session.execute(query)
        profile_data = dict(result.mappings().one())

        query = select(city).where(city.c.id == profile_data["city_id"])
        result = await session.execute(query)
        city_ = dict(result.mappings().one())

        profile_data.pop("city_id")
        profile_data["city"] = city_

        vacancy_data.pop("company_id")
        vacancy_data["company"] = profile_data

        await session.commit()
        return {
            "status_code": 200,
            "data": vacancy_data,
        }
    except sqlalchemy.exc.ProgrammingError:
        raise HTTPException(
            status_code=400,
            detail="Id does not exist"
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@company_router.get("/vacancy/{id_}")
async def get_vacancy(id_: int, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(vacancy).where(vacancy.c.id == id_)
        result = await session.execute(query)
        vacancy_data = dict(result.mappings().one())

        if not vacancy_data:
            HTTPException(
                status_code=400,
                detail="Vacancy not found"
            )

        query = select(profile).where(profile.c.id == id_)
        result = await session.execute(query)
        profile_data = dict(result.mappings().one())

        query = select(city).where(city.c.id == profile_data["city_id"])
        result = await session.execute(query)
        city_ = dict(result.mappings().one())

        profile_data.pop("city_id")
        profile_data["city"] = city_

        vacancy_data.pop("company_id")
        vacancy_data["company"] = profile_data

        return {
            "status_code": 200,
            "data": vacancy_data,
        }
    except sqlalchemy.exc.ProgrammingError:
        return HTTPException(
            status_code=400,
            detail="Id does not exist"
        )
    except Exception as error:
        return HTTPException(
            status_code=500,
            detail=error.args
        )


@company_router.put("/vacancy/{id_}")
async def update_vacancy(id_: int, item: VacancyUpdate, session: AsyncSession = Depends(get_async_session)):
    try:
        statement = update(vacancy).where(vacancy.c.id == id_).values(**item.dict())
        await session.execute(statement)

        await session.commit()
        return {
            "status_code": "200"
        }
    except sqlalchemy.exc.ProgrammingError:
        return HTTPException(
            status_code=400,
            detail="Id does not exist"
        )
    except Exception as error:
        return HTTPException(
            status_code=500,
            detail=error.args
        )


@company_router.delete("/vacancy/{id_}")
async def delete_vacancy(id_: int, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(vacancy).where(vacancy.c.id == id_)
        is_exist = await session.execute(query)
        await session.commit()
        is_exist.one()
        statement = delete(vacancy).where(vacancy.c.id == id_)
        await session.execute(statement)
        await session.commit()
        return {
            "status_code": "200"
        }
    except sqlalchemy.exc.NoResultFound:
        raise HTTPException(
            status_code=400,
            detail="Vacancy not found"
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )

@company_router.get("/{id_}/vacancies")
async def get_vacancy_to_company(company_id_: int, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(vacancy).where(vacancy.c.company_id == company_id_)
        result = await session.execute(query)
        vacancy_data = result.mappings().all()
        if not vacancy_data:
            HTTPException(
                status_code=400,
                detail="Vacancy not found"
            )
        return {
            "status_code": 200,
            "data": vacancy_data,
        }
    except sqlalchemy.exc.ProgrammingError:
        return HTTPException(
            status_code=400,
            detail="Id does not exist"
        )
    except Exception as error:
        return HTTPException(
            status_code=500,
            detail=error.args
        )