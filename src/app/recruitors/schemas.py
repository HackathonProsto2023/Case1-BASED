from pydantic import BaseModel


class RecruitorCreate(BaseModel):
    login: str
    profile_id: int
    creator_role: str