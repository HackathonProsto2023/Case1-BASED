from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy import insert, select, update
from sqlalchemy.ext.asyncio import AsyncSession
import sqlalchemy.exc

from src.app.database import get_async_session
from src.app.responses.models import response
from src.app.responses.schemas import ResponseCreate

response_router = APIRouter(
    prefix="/response",
    tags=["response"]
)


@response_router.post("/")
async def add_response(response_: ResponseCreate, session: AsyncSession = Depends(get_async_session)):
    try:
        statement = insert(response).values(**response_.dict()).returning(response)
        result = await session.execute(statement)
        response_data = dict(result.mappings().one())
        await session.commit()
        return {
            "status_code": 200,
            "data": response_data,
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


@response_router.get("/{id_}")
async def get_response_by_id(id_: int, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(response).where(response.c.id == id_)
        result = await session.execute(query)
        response_data = dict(result.mappings().one())

        return {
            "status_code": 200,
            "data": response_data,
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


@response_router.put("/{id_}/answer")
async def answer_to_response(id_: int, answer: str = Body(..., embed=True),
                         session: AsyncSession = Depends(get_async_session)):
    try:
        statement = update(response).where(response.c.id == id_).values(answer=answer)
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
