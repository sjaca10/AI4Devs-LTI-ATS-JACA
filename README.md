# Project Name

## Overview

Brief description of the project.

## Stack

- TypeScript
- Node.js (for backend)
- Express (for backend)
- PostgreSQL (for backend)
- React (for frontend)
- Playwright (for e2e-tests)

## Backend

### Dependencies

For the backend, the project uses the following major dependencies:
- `dotenv`: For loading environment variables.
- `express`: Minimalist web framework for Node.js.
- `pg`: Non-blocking PostgreSQL client for Node.js.

### DDD

The project follows a Domain-Driven Design (DDD) approach, particularly in the backend. Here's how the file structure is organized to support DDD:

- `application/`: Contains service layer logic that orchestrates domain objects to perform the operations of the application.
- `domain/`: Contains the business logic and entities. This is the heart of the DDD approach, where the business domain is modeled.
  - `entities/`: Contains the domain entities, which are the fundamental objects of the business domain.
- `infrastructure/`: Contains implementations of the interfaces defined in the domain layer, such as repositories for database access.
- `interfaces/`: Contains interfaces that define contracts for services, repositories, etc., that are implemented in the infrastructure layer or used in the application layer.

## Frontend

### Dependencies
For the frontend, key dependencies include:
- `react` and `react-dom` for building the user interface.
- `@testing-library/react` for testing React components.


## Scripts

How to install dependencies:
```
npm install
```

How to run the project:
```
npm start
```

How to run tests:
```
npm test
```
