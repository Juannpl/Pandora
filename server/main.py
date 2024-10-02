from fastapi import FastAPI
from models.user import Base
from db.database import engine
from api.v1.endpoints.user_routes import router as user_router

# Créer les tables de la base de données
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Inclure le routeur pour les utilisateurs
app.include_router(user_router, prefix="/users", tags=["users"])
