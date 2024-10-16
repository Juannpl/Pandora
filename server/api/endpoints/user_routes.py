from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from schemas.user import UserCreate, UserUpdate, UserData, LoginRequest, Token
from core.security import create_access_token
from services.user_service import (
    create_user,
    get_all_users,
    get_user_by_id,
    update_user,
    delete_user,
    authenticate_user
)
from db.database import get_db  # Assurez-vous que cette fonction est définie pour obtenir la session DB
from datetime import timedelta 

router = APIRouter()

@router.post("/auth", response_model=Token)
async def login_user(login_data: LoginRequest, db: AsyncSession = Depends(get_db)):
    # Correct the attribute names
    user = await authenticate_user(db, login_data.email, login_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
        )

    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )

    return {"message": "Login successful!", "data": access_token}


@router.post("/users/", response_model=UserData)
async def create_user_route(user: UserCreate, db: AsyncSession = Depends(get_db)):
    new_user = await create_user(db, user)
    if new_user is None:
        raise HTTPException(status_code=400, detail="Email already registered")
    return UserData.from_orm(new_user)

@router.get("/users/", response_model=list[UserData])
async def get_all_users_route(db: AsyncSession = Depends(get_db)):
    users = await get_all_users(db)
    return [UserData.from_orm(user) for user in users]

@router.get("/users/{user_id}", response_model=UserData)
async def get_user_route(user_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return UserData.from_orm(user)

@router.put("/users/{user_id}", response_model=UserData)
async def update_user_route(user_id: int, user_update: UserUpdate, db: AsyncSession = Depends(get_db)):
    updated_user = await update_user(db, user_id, user_update)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")

    return UserData.from_orm(updated_user)

@router.delete("/users/{user_id}", response_model=UserData)
async def delete_user_route(user_id: int, db: AsyncSession = Depends(get_db)):
    deleted_user = await delete_user(db, user_id)
    if not deleted_user:
        raise HTTPException(status_code=404, detail="User not found")
    return UserData.from_orm(deleted_user)
