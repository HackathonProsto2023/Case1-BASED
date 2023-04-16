from pydantic import BaseModel


class UserCreate(BaseModel):
    login: str
    role: str


class ProfileUpdate(BaseModel):
    name: str
    city: str
    description: str

