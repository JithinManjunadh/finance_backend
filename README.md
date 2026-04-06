# Finance Data Processing & Access Control Backend
A production-style backend system for managing financial records with role-based access control and analytics APIs.

## Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Joi Validation

## Project Structure

models/
controllers/
routes/
middleware/
utils/
config/

## Authentication

* JWT-based authentication
* Secure login & registration
* Protected routes using middleware

## Role-Based Access Control (RBAC)

### Viewer

* View financial records
* Access basic dashboard summary
* ❌ Cannot create/update/delete

### Analyst

* View all records
* Access analytics:

  * Total income/expense
  * Category-wise breakdown
  * Recent transactions
* ❌ Cannot modify data

### 🛠️ Admin

* Full access:

  * Create, update, delete records
  * Manage users
  * Access all dashboard data


## Financial Records

Each record contains:

* amount
* type (income / expense)
* category
* date
* description

### Features:

* Full CRUD (Admin only)
* Filtering by type and category


## Dashboard APIs

* Total Income
* Total Expense
* Net Balance
* Category-wise totals
* Recent transactions


## Access Control

Implemented using middleware:

* `protect` → verifies JWT
* `authorize` → checks role permissions


## Validation

* Joi-based request validation
* Separate schemas for:

  * Create (strict)
  * Update (partial)


## Error Handling

* Centralized error middleware
* Async error handling wrapper
* Proper status codes and messages


## 📌 API Endpoints (Overview)

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Finance
- GET `/api/finance`
- POST `/api/finance` (Admin)
- PATCH `/api/finance/:id` (Admin)
- DELETE `/api/finance/:id` (Admin)

### Dashboard
- GET `/api/dashboard/summary`
- GET `/api/dashboard/categories` (Analyst, Admin)
- GET `/api/dashboard/recent` (Analyst, Admin)

### Users (Admin)
- GET `/api/users`
- POST `/api/users`
- PATCH `/api/users/:id`
- DELETE `/api/users/:id`

👉Detailed API docs: [API Documentation](api.md)

## Testing

All APIs tested using Hoppscotch.

Includes:

* Auth flows
* Role-based access checks
* Validation errors
* Edge cases


## Setup Instructions

```bash
git clone <repo-url>
cd finance-backend
npm install
```

Create `.env`:

```
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run:

```bash
npm nodemon server.js
```

---

## Highlights

* Clean MVC architecture
* Role-based authorization
* Aggregation-based analytics
* Production-level validation & error handling

## Future Improvements

* Pagination
* API documentation (Swagger)
* Rate limiting
* Soft delete


## Author

N Jithin Manjunadh
