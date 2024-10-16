from sqlalchemy import Column, Integer, String
from db.database import Base
from core.security import verify_password  # Importer la fonction de vérification

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)         
    last_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    def verify_user_password(self, plain_password: str) -> bool:
        """Vérifie si le mot de passe en clair correspond au mot de passe haché de l'utilisateur."""
        return verify_password(plain_password, self.hashed_password)
