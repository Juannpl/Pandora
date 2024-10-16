from pydantic import BaseModel, EmailStr, constr
from typing import Optional

class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: Optional[constr(min_length=8)] = None

class UserData(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: EmailStr
    hashed_password: str

    class Config:
        from_attributes = True  # Anciennement 'orm_mode'

class UserResponse(BaseModel):
    message: str
    data: UserData

    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    first_name: str
    last_name: str
    email: Optional[EmailStr] = None
    password: Optional[constr(min_length=8)] = None

class ResponseModel(BaseModel):
    message: str
    data: UserData  # ou List[UserResponse] si c'est une liste d'utilisateurs

class LoginRequest(BaseModel):
    email: str
    password: str

class LoginResponse(BaseModel):
    message: str
    data: dict = None  # Champ optionnel si tu ne veux pas toujours le renvoyer

class Token(BaseModel):
    message: str
    data: str

