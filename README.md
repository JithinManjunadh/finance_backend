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


## API Endpoints

### Authentication

#### Register User

```
POST /api/auth/register
```

**Body:**

```json
{
  "name": "Test1",
  "email": "test1@example.com",
  "password": "123456"
}
```

---

#### Login User

```
POST /api/auth/login
```

**Body:**

```json
{
  "email": "test1@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "name": "Test1",
    "email": "test1@example.com",
    "role": "viewer"
  }
}
```

---

### Financial Records

> All routes require `Authorization` header:

```
Authorization: YOUR_TOKEN
```

---

#### Get All Records

```
GET /api/finance
```

**Query Params (optional):**

```
?type=income
?category=salary
```

---

#### Create Record (Admin Only)

```
POST /api/finance
```

**Body:**

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "description": "Monthly salary"
}
```

---

#### Update Record (Admin Only)

```
PATCH /api/finance/:id
```

**Body (partial allowed):**

```json
{
  "amount": 7000
}
```

---

#### Delete Record (Admin Only)

```
DELETE /api/finance/:id
```

---

### Dashboard APIs

---

#### Get Summary (All Roles)

```
GET /api/dashboard/summary
```

**Response:**

```json
{
  "totalIncome": 15000,
  "totalExpense": 5000,
  "netBalance": 10000
}
```

---

#### Category-wise Totals (Analyst, Admin)

```
GET /api/dashboard/categories
```

**Response:**

```json
[
  { "_id": "salary", "total": 10000 },
  { "_id": "freelance", "total": 5000 }
]
```

---

#### Recent Transactions (Analyst, Admin)

```
GET /api/dashboard/recent
```

---

### User Management (Admin Only)

---

#### Get All Users

```
GET /api/users
```

---

#### Create User

```
POST /api/users
```

---

#### Update User Role

```
PATCH /api/users/:id
```

---

#### Delete User

```
DELETE /api/users/:id
```

---

### Common Responses

#### Unauthorized

```json
{
  "message": "Not authorized"
}
```

#### Forbidden

```json
{
  "message": "Access forbidden"
}
```

#### Validation Error

```json
{
  "message": "Invalid input data"
}
```


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
