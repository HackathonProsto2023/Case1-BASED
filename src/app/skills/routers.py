from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy import insert, select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from src.app.skills.schemas import *
from src.app.database import get_async_session
from src.app.skills.models import *

skills_router = APIRouter(
    tags=["skills"],
    prefix="/skill"
)


async def add_skill(skill_name: str, session: AsyncSession = Depends(get_async_session)):
    try:
        statement = insert(skill).values(name=skill_name.lower()).returning(skill)
        result = await session.execute(statement)
        skill_data = dict(result.mappings().one())
        await session.commit()
        return skill_data
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


async def get_skill(skill_name: str, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(skill).where(
            skill.c.name.__contains__(skill_name.lower()) or skill_name.lower().__contains__(skill.c.name)
        )
        result = await session.execute(query)
        skill_data = dict(result.mappings().one())
        return skill_data
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@skills_router.post("/applicant")
@skills_router.post("/vacancy/")
async def add_vacancy_skill(skill_: SkillChanging, role: str = Body(..., embed=True),
                      session: AsyncSession = Depends(get_async_session)):
    try:
        assert role in ["applicant", "company", "recruiter"]

        skill_data = get_skill(skill_.skill_name, session)
        if not skill_data:
            skill_data = add_skill(skill_.skill_name, session)

        if role == "applicant":
            statement = insert(applicant_skill).values(skill_id=skill_data["id"], applicant_id=skill_.id)
        else:
            statement = insert(vacancy_skill).values(skill_id=skill_data["id"], vacancy_id=skill_.id)

        await session.execute(statement)
        session.commit()
    except AssertionError:
        raise HTTPException(
            status_code=403,
            detail="Incorrect role"
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@skills_router.delete("/applicant")
@skills_router.delete("/vacancy")
async def delete_applicant_skill(skill_: SkillChanging, role: str = Body(..., embed=True),
                           session: AsyncSession = Depends(get_async_session)):
    try:
        assert role in ["applicant", "company", "recruiter"]

        skill_data = get_skill(skill_.skill_name, session)
        if not skill_data:
            raise HTTPException(
                status_code=400,
                detail="Skill not found"
            )

        if role == "applicant":
            statement = delete(applicant_skill).where(skill_id=skill_data["id"], applicant_id=skill_.id)
        else:
            statement = delete(vacancy_skill).where(skill_id=skill_data["id"], vacancy_id=skill_.id)

        await session.execute(statement)
        session.commit()
    except AssertionError:
        raise HTTPException(
            status_code=403,
            detail="Incorrect role"
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )
