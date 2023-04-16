from pydantic import BaseModel


class Vacancies_input(BaseModel):
    title: str
    description: str