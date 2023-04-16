from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, insert
from sqlalchemy.ext.asyncio import AsyncSession

from src.app.database import get_async_session
from src.app.recruitors.schemas import RecruitorCreate
from src.app.users.models import user, profile
from src.app.users.routers import add_user
from src.app.users.schemas import User

recruitor_router = APIRouter(
    tags=["recruitor"],
    prefix="/recruitor"
)

@recruitor_router.post("/",status_code=200)
async def post_recruitors(recruitor_ : RecruitorCreate, session: AsyncSession = Depends(get_async_session)):
    try:
        assert recruitor_.creator_role == "company"
        query = select(profile).where(profile.c.id == recruitor_.profile_id)
        result = await session.execute(query)
        data = result.all()
        if not data:
            raise HTTPException(
                status_code=400,
                detail="Profile does not exist"
            )

        statement = insert(user).values(login = recruitor_.login,profile_id = recruitor_.profile_id,role = "recruitor")
        await session.execute(statement)
        await session.commit()
        return {
            "status_code":"200"
        }
    except AssertionError:
        raise HTTPException(
             status_code=403,
             detail= "Method not allowed"
        )
    except HTTPException:
        raise
    except Exception as error:
         raise HTTPException(
             status_code=500,
             detail=error.args
        )