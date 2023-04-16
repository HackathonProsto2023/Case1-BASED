from pydantic import BaseModel


class SkillChanging(BaseModel):
    skill_name: str
    id: int

