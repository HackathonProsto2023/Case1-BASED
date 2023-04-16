from pydantic import BaseModel


class ResponseCreate(BaseModel):
    applicant_id: int
    vacancy_id: int
    task_result: str
