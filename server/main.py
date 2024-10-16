from fastapi import FastAPI
from api.endpoints import user_routes # Importez les deux ensembles de routes
from db.database import engine
from models import user

# Initialisation de l'application FastAPI
app = FastAPI(
    title="MyAPI",
    version="1.0",
    description="API Pandora"
)

async def create_database():
    async with engine.begin() as conn:
        await conn.run_sync(user.Base.metadata.create_all)

@app.on_event("startup")
async def startup_event():
    await create_database()

# Inclure les routes des utilisateurs
app.include_router(user_routes.router, prefix="/api/v1", tags=["Users"])

# Route de santé pour vérifier que l'API fonctionne
@app.get("/health")
async def health_check():
    return {"status": "healthy"}
