# PG Management & Resident Portal

A full-stack web application designed to simplify Paying Guest (PG) accommodation management through digital resident registration, room and bed allocation, and centralized administration.

The project aims to replace manual PG management processes with an organized, reliable, and user-friendly digital platform for both administrators and residents.

## Overview

Managing a PG accommodation involves several activities, including resident registration, room allocation, occupancy tracking, and maintaining resident information.

This project aims to bring these operations together into a single platform with separate experiences for administrators and residents.

The system is being designed around a real-world PG accommodation setup with **40 rooms and a total capacity of 72 beds**.

## Key Features

### Planned Features

- **Resident Registration:** Register new residents and maintain their information.
- **Room & Bed Management:** Manage rooms, available beds, and occupancy.
- **Admin Dashboard:** Centralized management of PG operations.
- **Resident Portal:** Provide residents with access to their information and services.
- **Occupancy Tracking:** Monitor room availability and resident allocation.
- **Resident Management:** View and manage registered residents.
- **Scalable Architecture:** Organize backend functionality into reusable modules.

*Features are being implemented incrementally. This README will be updated as development progresses.*

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Build Tool | Vite |
| Backend | Node.js |
| API Framework | Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Validation | Zod |
| Version Control | Git & GitHub |

## Project Architecture

The application follows a frontend-backend architecture:

```text
React Frontend
      |
      | HTTP Requests
      v
Express REST API
      |
      v
Controllers / Routes
      |
      v
Services & Validation
      |
      v
Mongoose Models
      |
      v
MongoDB Atlas
```

## Project Structure

```text
Pg-Service/
│
├── .gitignore
│
└── pg-management/
    │
    ├── backend/
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── middlewares/
    │   │   ├── models/
    │   │   ├── routes/
    │   │   ├── services/
    │   │   └── validators/
    │   │
    │   ├── .env.example
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── package.json
    └── package-lock.json
```

## Accommodation Structure

The initial PG configuration consists of:

- Total floors: 5
- Active accommodation floors: 1, 2, 3, 4, and 5
- Total rooms: 40
- Total beds: 72

| Floor | Rooms | Beds per Room | Total Beds |
|---|---:|---:|---:|
| Floor 1 | 8 | 2 | 16 |
| Floor 2 | 8 | 2 | 16 |
| Floor 3 | 8 | 3 | 24 |
| Floor 4 | 8 | 2 | 16 |
| Floor 5 | 8 | 2 | 16 |
| **Total** | **40** | | **88** |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Pg-Service.git
```

### 2. Navigate to the project

```bash
cd Pg-Service/pg-management
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Install backend dependencies

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the backend directory using `.env.example` as a reference.

Configure your MongoDB connection string and other required environment variables according to the backend configuration.

**Important:** Never commit your actual `.env` file or expose database credentials.

### 6. Run the application

Start the frontend and backend using their respective development scripts defined in their `package.json` files.

## Development Roadmap

- [x] Initial project structure
- [x] Backend project setup
- [x] MongoDB/Mongoose architecture planning
- [x] Resident model and registration backend structure
- [ ] Complete resident registration API
- [ ] Connect backend to MongoDB Atlas
- [ ] Implement frontend registration interface
- [ ] Room and bed allocation
- [ ] Admin authentication and dashboard
- [ ] Resident authentication and portal
- [ ] Occupancy management
- [ ] Testing and deployment

## Project Goals

This project is being developed to demonstrate practical full-stack development skills, including:

- REST API development
- Database design and management
- Modular backend architecture
- Input validation and error handling
- Frontend-backend integration
- Real-world application design

## Contributions

Suggestions, feedback, and improvements are welcome!

## License

This project is currently under development. A license will be added as the project progresses.

---

**Built with React, Node.js, Express, and MongoDB.**
