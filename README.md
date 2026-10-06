# Academic Feedback Portal

## System Overview

The **Academic Feedback Portal** is a full-stack web application for collecting and viewing student feedback related to academic subjects.

The application uses **Next.js & React** for the frontend, **Node.js & Express** for the backend, and **MySQL** for persistent data storage.

Students can submit their name, subject, rating, and comments. The feedback is sent to the backend through RESTful APIs and stored in the MySQL database.

---

## Technology Stack

* **Frontend:** Next.js, React
* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **API:** RESTful API
* **Database Driver:** MySQL2
* **Configuration:** dotenv
* **Version Control:** Git & GitHub

---

## Architecture

```text
React / Next.js
      |
      | REST API
      ↓
Node.js + Express
      |
      | SQL Queries
      ↓
MySQL Database
```

The frontend handles the user interface, forms, validation, and API communication.

The backend handles API requests and database operations.

The database stores the submitted feedback.

---

## Frontend

The frontend is built using **React with Next.js** and follows a component-based structure.

### Main Components

* **`FeedbackForm.js`**
  * Handles feedback input.
  * Collects student name, subject, rating, and comments.
  * Performs basic validation.

* **`FeedbackCard.js`**
  * Displays individual feedback records.

* **`Navbar.js`**
  * Provides navigation across the application.

### API Service

**`services/api.js`** handles communication between the frontend and backend.

It supports:

```text
GET  /api/feedback
POST /api/feedback
```

The project also contains a mock-data mode that can be used during frontend development.

---

## Backend

The backend is implemented using **Node.js & Express**.

### `backend/server.js`

The server handles:

* REST API routes
* Request validation
* JSON requests
* CORS
* Database operations

### API Endpoints

#### GET `/api/feedback`

Retrieves all feedback records from the database.

#### POST `/api/feedback`

Creates a new feedback record.

Example request:

```json
{
  "studentName": "Aditi Kosta",
  "subject": "Web Programming",
  "rating": 5,
  "comment": "Excellent practical sessions"
}
```

---

## Database

The project uses **MySQL**.

### Database

```text
student_feedback
```

### Table

```text
feedback
```

### Table Fields

| Field | Description |
|---|---|
| `id` | Unique feedback ID |
| `studentName` | Student name |
| `subject` | Subject name |
| `rating` | Feedback rating |
| `comment` | Feedback comment |
| `createdAt` | Submission timestamp |

The database can be created using:

```text
database/student_feedback.sql
```

---

## Project Structure

```text
student-feedback-portal/
│
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── components/
│   ├── FeedbackCard.js
│   ├── FeedbackForm.js
│   └── Navbar.js
│
├── pages/
│   ├── _app.js
│   ├── dashboard.js
│   └── index.js
│
├── services/
│   └── api.js
│
├── utils/
│   └── formatters.js
│
├── database/
│   └── student_feedback.sql
│
├── .gitignore
├── package.json
└── README.md
```

> `.env` and `.env.local` contain local configuration and should not be committed to GitHub.

---

## Installation & Setup

### Prerequisites

* **Node.js** v18 or higher
* **npm**
* **MySQL**
* **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/Aditi-Kosta/student-feedback-portal.git
cd student-feedback-portal
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Setup MySQL Database

Start MySQL and create the database:

```sql
CREATE DATABASE student_feedback;
```

Import the SQL file:

```text
database/student_feedback.sql
```

Verify the database:

```sql
USE student_feedback;
SHOW TABLES;
```

The `feedback` table should be present.

### 4. Setup Backend

```bash
cd backend
npm install
```

Create:

```text
backend/.env
```

Add:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=student_feedback
DB_PORT=3306
```

Replace `YOUR_MYSQL_PASSWORD` with your MySQL password.

### 5. Start Backend

From the `backend` directory:

```bash
node server.js
```

The backend runs at:

```text
http://localhost:5000
```

### 6. Configure Frontend

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 7. Start Frontend

Open another terminal in the project root:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Application Pages

```text
Submission Form:
http://localhost:3000/

Dashboard:
http://localhost:3000/dashboard
```

---

## Application Flow

```text
Student
   ↓
Feedback Form
   ↓
Next.js / React
   ↓
REST API
   ↓
Express Backend
   ↓
MySQL Database
```

The frontend does not directly access MySQL. All database operations are performed through the backend API.

---

## Current Functionality

* Student feedback submission
* Feedback validation
* Feedback storage in MySQL
* Feedback retrieval
* Dashboard for viewing feedback
* Rating and text-based filtering
* REST API integration
* Mock-data support for frontend development

The current backend primarily implements **Create & Read** operations.

---

## Security & Configuration

* Database credentials are stored in environment variables.
* `.env` files are excluded from Git.
* Parameterized SQL queries are used for database insertion.
* The frontend communicates with MySQL only through the backend API.

---

## Version Control

The project is maintained using **Git & GitHub** for source control and team collaboration.

---

## Future Improvements

* Student and administrator authentication
* Role-based access
* Update & delete feedback
* Advanced analytics
* Automated testing
* Production deployment
