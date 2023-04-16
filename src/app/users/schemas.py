from pydantic import BaseModel


class User(BaseModel):
    login: str
    role: str


class ProfileUpdate(BaseModel):
    name: str
    city_id: int
    description: str

