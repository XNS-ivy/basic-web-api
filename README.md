# 🐾 basic-web-api

A simple REST API built with [Elysia](https://elysiajs.com/) and [Bun](https://bun.sh/).

---

## 📦 Tech Stack

- **Runtime** — Bun
- **Framework** — Elysia
- **Language** — TypeScript

---

## 🚀 Getting Started

```bash
# Navigate to project folder
cd basic-web-api

# Install dependencies
bun install

# Start the server (with auto-reload)
bun run --watch index.ts
```

Server runs at: `http://localhost:4040`

---

## 📡 Endpoints

### Health Check

```
GET /
```

**Response:**
```json
{ "message": "API Ready!" }
```

---

### Users

#### Get all users
```
GET /users
```

**Response:**
```json
[
  { "id": 1, "name": "nvryx", "email": "nvryxdubz@gmail.com" }
]
```

---

#### Get user by ID
```
GET /user/:id
```

**Response (200):**
```json
{ "id": 1, "name": "nvryx", "email": "nvryxdubz@gmail.com" }
```

**Response (404):**
```json
{ "message": "User Not Found" }
```

---

#### Create a user
```
POST /users
```

**Body:**
```json
{
  "name": "XNS-ivy",
  "email": "xns.ivy@gmail.com"
}
```

**Response (200):**
```json
{ "id": 2, "name": "XNS-ivy", "email": "xns.ivy@gmail.com" }
```

---

#### Update a user
```
PUT /users/:id
```

**Body:**
```json
{
  "name": "XNS-ivy updated",
  "email": "new@gmail.com"
}
```

**Response (200):**
```json
{ "id": 2, "name": "XNS-ivy updated", "email": "new@gmail.com" }
```

**Response (404):**
```json
{ "message": "User Not Found" }
```

---

#### Delete a user
```
DELETE /users/:id
```

**Response (200):**
```json
{ "message": "deleted" }
```

**Response (404):**
```json
{ "message": "Error User Not Found" }
```

---

## 🧪 Testing with curl (Windows)

```powershell
# GET all users
curl.exe http://localhost:4040/users

# POST create user
curl.exe -X POST http://localhost:4040/users `
  -H "Content-Type: application/json" `
  -d '{"name": "XNS-ivy", "email": "xns.ivy@gmail.com"}'

# PUT update user
curl.exe -X PUT http://localhost:4040/users/1 `
  -H "Content-Type: application/json" `
  -d '{"name": "updated", "email": "updated@gmail.com"}'

# DELETE user
curl.exe -X DELETE http://localhost:4040/users/1
```

> Alternatively, use [Hoppscotch](https://hoppscotch.io) as a GUI client.

---

## 📁 Project Structure

```
basic-web-api/
├── index.ts        # entry point & all routes
├── package.json
└── tsconfig.json
```

---

## ⚠️ Note

Data is stored **in-memory** — it resets every time the server restarts. No database connected yet.