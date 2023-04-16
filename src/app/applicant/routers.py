from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from src.app.database import get_async_session
from src.app.responses.models import response
from src.app.skills.models import applicant_skill
from src.app.users.models import user

applicants_router = APIRouter(
    tags=["applicant"],
    prefix="/applicant"
)


@applicants_router.get("/{id_}/responses")
async def get_responses_by_applicant(id_: int, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(user).where(user.c.id == id_)
        result = await session.execute(query)
        if not result.mappings().one():
            raise HTTPException(
                status_code=400,
                detail="User not found"
            )

        query = select(response).where(response.c.applicant_id == id_)
        result = await session.execute(query)
        return {
            "status_code": 200,
            "data": list(result.mappings().all())
        }
    except HTTPException:
        raise
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


# @applicants_router.get("/{id_}/search")
# def sort_by_skills(id_: int):
#     select(applicant_skill).where("")
