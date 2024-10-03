# Utiliser une image Node pour construire l'application
FROM node:20

# Définir le répertoire de travail
WORKDIR /client

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 8081 pour le serveur Metro
EXPOSE 8081

# Donner les droits d'exécution au script
RUN chmod +x ./start-android.sh

# Lancer le script pour démarrer automatiquement sur Android
CMD ["./start-android.sh"]
