from pydantic import BaseModel

class Response_input(BaseModel):
    applicant_id: int
    vacancy_id: int
    task_result: str
