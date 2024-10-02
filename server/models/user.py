from sqlalchemy import Column, Integer, String, Boolean
from db.database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)  # Identifiant
    first_name = Column(String, index=True)            # Prénom
    last_name = Column(String, index=True)          # Nom
    email = Column(String, unique=True, index=True) # Email
    age = Column(Integer)                           # Âge
    phone_number = Column(String, nullable=True)  # Numéro de téléphone
    address = Column(String, nullable=True)       # Adresse complète
    city = Column(String, nullable=True)          # Ville
    country = Column(String, nullable=True)       # Pays
    is_active = Column(Boolean, default=True)     # Utilisateur actif ou non
    is_admin = Column(Boolean, default=False)     # Rôle administrateur
