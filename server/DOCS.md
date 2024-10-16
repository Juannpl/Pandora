# Documentation pour le Lancement de l'API FastAPI

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Docker**: Téléchargez et installez Docker depuis [ici](https://www.docker.com/products/docker-desktop).
- **Docker Compose**: Docker Compose est généralement inclus avec Docker Desktop.

## Structure du Projet

```bash
.
├── api
│   └── endpoints
│       │
│       └── user_routes.py
├── core
│   │
│   └── security.py
├── db
│   └── database.py
│
├── docker-compose.yml
├── Dockerfile
├── DOCs.md
├── main.py
├── models
│   │
│   └── user.py
├── README.md
├── requirements.txt
├── schemas
│   │
│   └── user.py
└── services
    │
    └── user_service.py
```

## Description des Fichiers

- **docker-compose.yml**: Définit les services Docker (backend FastAPI, PostgreSQL).
- **Dockerfile**: Configuration Docker pour le backend FastAPI.
- **requirements.txt**: Liste des dépendances Python.

## Lancement de l'API avec Docker

### Suivez ces étapes pour lancer votre API avec Docker :

**Clonez le dépôt (si ce n'est pas déjà fait) :**

```bash
git clone <votre-url-repo>
cd <nom-du-projet>
```

**Construisez les images Docker et démarrez les services  :**

À la racine de votre projet, exécutez la commande suivante pour construire les images pour votre backend FastAPI et votre base de données PostgreSQL. 
Une fois les images construites, démarrez les conteneurs avec :

```bash
docker-compose up --build -d
```

Cela démarrera à la fois le backend FastAPI et la base de données PostgreSQL.

**Accédez à l'application FastAPI :**

Une fois les services en cours d'exécution, vous pouvez accéder à la documentation de l'API FastAPI à l'adresse suivante :

- http://localhost:8000/docs (Swagger UI)
- http://localhost:8000/redoc (ReDoc)

## Postman

**Route POST :**

> http://0.0.0.0:8000/users

**Data of User :**

```json
{
    "username": "test",
    "pseudo": "test",
    "email": "test@gmail.com",
    "password": "test"
}
```

**Response :**

```json
{
    "id": 1,
    "username": "test",
    "pseudo": "test",
    "email": "test@gmail.com"
}
```