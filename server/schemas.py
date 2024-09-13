from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    name: str
    email: str
    age: Optional[int] = None

class UserRead(BaseModel):
    id: int
    name: str
    email: str
    age: Optional[int] = None

    class Config:
        orm_mode = True
