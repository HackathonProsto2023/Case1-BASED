from pydantic import BaseModel


class VacancyCreate(BaseModel):
    title: str
    description: str


class VacancyUpdate(BaseModel):
    id: int
    title: str
    description: str
    company_id: str
