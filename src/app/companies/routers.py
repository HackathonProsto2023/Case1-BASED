from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
import sqlalchemy.exc
import json

from src.app.database import get_async_session
from src.app.companies.schemas import *
from src.app.companies.models import *


from sqlalchemy import insert, select, update

company_router = APIRouter(
    prefix="/company",
    tags=["company"]
)


@company_router.post("/{id_}/vacancy")
async def post_vacancy(id_:int,item:Vacancies_input,session: AsyncSession = Depends(get_async_session)):
    #query - SELECT
    #stmt - запрос на удаление/вставку
    try:
        stmt = insert(vacancy).values(**item.dict(),company_id = id_).returning()
        result = await session.execute(stmt)
        await session.commit()
        return {
            "status":"success",
            "data" : None,
            "details": None
        }
    except sqlalchemy.exc.ProgrammingError as e:
         return {
             "status": "error - id does not exist",
             "data": None,
             "details": e.args
         }
    except Exception as e:
         return {
             "status": "error",
             "data": None,
             "details": e.args
         }


@company_router.get("/vacancy/{id_}")
async def get_vacancy(id_:int,session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(vacancy).where(vacancy.c.id == id_)
        res = await session.execute(query)
        return {
            "status": "success",
            "data": res.mappings().all(),
            "details": None
        }
    except sqlalchemy.exc.ProgrammingError as e:
        return {
            "status": "error - id does not exist",
            "data": None,
            "details": e.args
        }
    except Exception as e:
        return {
            "status": "some error",
            "data": None,
            "details": e.args
        }

@company_router.put("/vacancy/{id_}")
async def get_vacancy(id_:int,item:Vacancies_input,session: AsyncSession = Depends(get_async_session)):
    try:
        stmt = (
            update(vacancy).where(vacancy.c.id == id_).values(**item.dict())
        )
        result = await session.execute(stmt)
        await session.commit()
        return {
            "status":"success",
            "data" : None,
            "details": None
        }
    except sqlalchemy.exc.ProgrammingError as e:
         return {
             "status": "error - id does not exist",
             "data": None,
             "details": e.args
         }
    except Exception as e:
         return {
             "status": "some error",
             "data": None,
             "details": e.args
         }