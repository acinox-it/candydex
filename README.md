# CandyDex

CandyDex is a full-stack web application built with AdonisJS (backend) and React (frontend via Inertia.js). It provides an interactive Pokedex to browse, search, and view detailed statistics of Pokemon.

## Features

- 📚 Browse a collection of Pokemon  
- 🔍 Search by name  
- 🏷️ Filter by elemental types  
- 📖 Detailed information with stats and navigation  
- 📱 Fully responsive design  
- ⚡ Modern and fast technology stack (AdonisJS + Inertia)  

## Tech Stack

### Frontend
- React 19 with TypeScript  
- Inertia.js for seamless server-driven SPA  
- Vite for build  
- Custom CSS for styling  

### Backend
- AdonisJS 6 (Node.js Framework)  
- SQLite database  
- Lucid ORM  
- RESTful architecture  

## Project Structure

```
candydex/
├── app/                    # Backend logic
│   ├── controllers/       # HTTP Controllers
│   ├── models/            # Database Models
│   └── services/          # Business Logic
├── inertia/                # Frontend application
│   ├── pages/             # React Pages (Home, Details)
│   ├── css/               # Styles
│   └── types/             # TypeScript definitions
├── database/               # Database setup
│   ├── migrations/        # Schema definitions
│   └── seeders/           # Initial data
├── config/                 # Application configuration
├── public/                 # Static assets (images)
└── docker-compose.yml      # Docker configuration
```

## Getting Started

### Prerequisites
- Node.js 20+ and npm  
- Docker (optional, for containerized run)  

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/candydex.git
cd candydex
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Generate an app key:
```bash
node ace generate:key
```

3. Run migrations and seed database:
```bash
node ace migration:run
node ace db:seed
```

4. Start the development server:
```bash
npm run dev
```
The application will be available at http://localhost:3333

#### Docker Deployment

1. Start the container:
```bash
docker-compose up -d --build
```

2. Seed the database (first run only):
```bash
docker-compose exec app node ace db:seed
```

The application runs at http://localhost:3333

## Environment Variables

```env
TZ=Europe/Paris
PORT=3333
HOST=0.0.0.0
LOG_LEVEL=info
APP_KEY=your_secret_key
NODE_ENV=development
SESSION_DRIVER=cookie
```

## Contribution

This is a portfolio project. Feel free to fork and adapt it for your own use.

## License

MIT

## Author

Acinox - 2025
