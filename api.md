## API Endpoints

---

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

**Response:**

```json
{
  "count": 2,
  "data": [
    {
      "_id": "...",
      "amount": 5000,
      "type": "income",
      "category": "salary",
      "description": "Monthly salary",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
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

**Response:**

```json
{
  "_id": "...",
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "description": "Monthly salary",
  "createdAt": "...",
  "updatedAt": "..."
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

**Response:**

```json
{
  "_id": "...",
  "amount": 7000,
  "type": "income",
  "category": "salary",
  "description": "Monthly salary",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

#### Delete Record (Admin Only)

```
DELETE /api/finance/:id
```

**Response:**

```json
{
  "message": "Deleted successfully"
}
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

**Response:**

```json
[
  {
    "_id": "...",
    "amount": 5000,
    "type": "income",
    "category": "salary",
    "description": "Monthly salary",
    "createdAt": "..."
  }
]
```

---

### User Management (Admin Only)

---

#### Get All Users

```
GET /api/users
```

**Response:**

```json
[
  {
    "_id": "...",
    "name": "John",
    "email": "john@example.com",
    "role": "viewer"
  }
]
```

---

#### Create User

```
POST /api/users
```

**Body:**

```json
{
  "name": "New User",
  "email": "new@example.com",
  "password": "123456",
  "role": "analyst"
}
```

**Response:**

```json
{
  "_id": "...",
  "name": "New User",
  "email": "new@example.com",
  "role": "analyst"
}
```

---

#### Update User Role

```
PATCH /api/users/:id
```

**Body:**

```json
{
  "role": "admin"
}
```

**Response:**

```json
{
  "_id": "...",
  "name": "John",
  "email": "john@example.com",
  "role": "admin"
}
```

---

#### Delete User

```
DELETE /api/users/:id
```

**Response:**

```json
{
  "message": "User deleted successfully"
}
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

---

## Testing

All APIs tested using Hoppscotch.

Includes:

* Auth flows
* Role-based access checks
* Validation errors
* Edge cases


