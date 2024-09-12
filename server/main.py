from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

# Initialiser l'application FastAPI
app = FastAPI()

# Modèle de données utilisant Pydantic
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

# Route de base
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur votre API FastAPI!"}

# Route pour lire un item avec un paramètre
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

# Route pour créer un item
@app.post("/items/")
def create_item(item: Item):
    return {"item_name": item.name, "item_price": item.price, "item_tax": item.tax}
