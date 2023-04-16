from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from src.app.companies.models import vacancy
from src.app.database import get_async_session
from src.app.responses.models import response
from src.app.skills.models import applicant_skill, skill, vacancy_skill
from src.app.users.models import user

applicants_router = APIRouter(
    tags=["applicant"],
    prefix="/applicant"
)


@applicants_router.get("/{id_}/responses", status_code=200)
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
            "data": list(result.mappings().all())
        }
    except HTTPException:
        raise
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@applicants_router.get("/{id_}/search", status_code=200)
async def sort_by_skills(id_: int, session: AsyncSession = Depends(get_async_session)):
    query = select(applicant_skill).where(applicant_skill.c.applicant_id == id_)
    result = await session.execute(query)
    skills = tuple(map(lambda x: x[0], result.all()))
    query = select(skill.c.id).where(
        skill.c.id.in_(skills)
    )
    result = await session.execute(query)
    applicant_skills = set(map(lambda x: x[0], result.all()))

    query = select(vacancy)
    result = await session.execute(query)
    vacancies = result.mappings().all()

    for vacancy_ in vacancies:
        query = select(vacancy_skill.c.skill_id).where(vacancy_skill.c.vacancy_id == vacancy["id"])
        result = await(session.execute(query))
        vacancy_skills = set(map(lambda x: x[0], result.all()))

        vacancy_["eq"] = len(vacancy_skills.intersection(applicant_skills))

    vacancies = sorted(vacancies, key=lambda x: x["eq"])
    return {
        "data": vacancies
    }
