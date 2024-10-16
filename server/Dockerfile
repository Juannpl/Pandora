# Utilise une image Python de base
FROM python:3.11-slim

# Créer le répertoire pour l'application
RUN mkdir /server

# Définit le répertoire de travail dans le conteneur
WORKDIR /server

# Copie le fichier requirements.txt dans le répertoire de travail du conteneur
COPY requirements.txt .

# Installe les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste du contenu du dossier server dans le conteneur
COPY . .

# Expose le port sur lequel l'application tournera
EXPOSE 8000

# Commande pour lancer l'application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]