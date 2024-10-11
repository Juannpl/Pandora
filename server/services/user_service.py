from sqlalchemy.orm import Session
from models.user import User
from schemas.user import UserCreate
from fastapi import HTTPException
from typing import Optional

# Pour le hashage des mots de passe
from core.security import get_password_hash

def create_user(db: Session, user: UserCreate):
    # Vérifie si l'utilisateur existe déjà
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered.")

    # Hashage du mot de passe
    hashed_password = get_password_hash(user.password)
    
    db_user = User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        age=user.age,
        phone_number=user.phone_number,
        address=user.address,
        city=user.city,
        country=user.country,
        hashed_password=hashed_password 
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(User).offset(skip).limit(limit).all()


def get_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def update_user(db: Session, db_user: User, user_data: UserCreate):
    # Mises à jour plus flexibles avec un dict
    update_data = user_data.dict(exclude_unset=True)  # Exclut les champs non fournis
    for key, value in update_data.items():
        setattr(db_user, key, value)
    
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    db.delete(user)
    db.commit()
