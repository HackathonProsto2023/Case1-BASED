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


async def get_skill(skill_name: str, session: AsyncSession = Depends(get_async_session)):
    try:
        query = select(skill).where(
            skill_name.lower() == skill.c.name
        )
        result = await session.execute(query)
        skill_data = result.mappings().all()
        if skill_data:
            return skill_data[0]
        return []
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


async def add_skill(skill_name: str, session: AsyncSession = Depends(get_async_session)):
    try:
        skill_data = await get_skill(skill_name, session)

        if not skill_data:
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


@skills_router.post("/applicant")
@skills_router.post("/vacancy/")
async def add_vacancy_skill(skill_: SkillChanging, role: str = Body(..., embed=True),
                            session: AsyncSession = Depends(get_async_session)):
    try:
        assert role in ["applicant", "company", "recruiter"]

        skill_data = await get_skill(skill_.skill_name, session)
        if not skill_data:
            skill_data = await add_skill(skill_.skill_name, session)

        if role == "applicant":
            query = select(applicant_skill).where(
                applicant_skill.c.skill_id == skill_data["id"] and applicant_skill.c.applicant_id == skill_.id)
            result = await session.execute(query)
            if not result.mappings().all():
                statement = insert(applicant_skill).values(skill_id=skill_data["id"], applicant_id=skill_.id)
                await session.execute(statement)
        else:
            query = select(vacancy_skill).where(
                vacancy_skill.c.skill_id == skill_data["id"] and vacancy_skill.c.vacancy_id == skill_.id)
            result = await session.execute(query)
            if not result.mappings().all():
                statement = insert(vacancy_skill).values(skill_id=skill_data["id"], vacancy_id=skill_.id)
                await session.execute(statement)

        await session.commit()
    except AssertionError:
        raise HTTPException(
            status_code=403,
            detail="Incorrect role"
        )
    except HTTPException:
        raise
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=error.args
        )


@skills_router.post("/applicant/delete")
@skills_router.post("/vacancy/delete")
async def delete_applicant_skill(skill_: SkillChanging, role: str = Body(..., embed=True),
                                 session: AsyncSession = Depends(get_async_session)):
    try:
        assert role in ["applicant", "company", "recruiter"]

        skill_data = await get_skill(skill_.skill_name, session)
        if not skill_data:
            raise HTTPException(
                status_code=400,
                detail="Skill not found"
            )

        if role == "applicant":
            query = select(applicant_skill).where(
                applicant_skill.c.skill_id == skill_data["id"] and applicant_skill.c.applicant_id == skill_.id)
            result = await session.execute(query)
            if not result.mappings().all():
                statement = delete(applicant_skill).where(skill_id=skill_data["id"], applicant_id=skill_.id)
                await session.execute(statement)
        else:
            query = select(vacancy_skill).where(
                vacancy_skill.c.skill_id == skill_data["id"] and vacancy_skill.c.vacancy_id == skill_.id)
            result = await session.execute(query)
            if not result.mappings().all():
                statement = delete(vacancy_skill).where(skill_id=skill_data["id"], vacancy_id=skill_.id)
                await session.execute(statement)

        await session.commit()
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
