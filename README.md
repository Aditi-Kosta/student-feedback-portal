# Academic Feedback Portal (Frontend Layer)

## System Overview

The **Academic Feedback Portal** is an enterprise-grade web application designed for processing, evaluating, and viewing student feedback regarding registered academic coursework and faculty performance.

This repository contains the complete frontend architecture, UI components, state validation logic, and mock API service integration layer. The frontend is built using **Next.js** and **React**, featuring client-side form validation, real-time analytics aggregation, responsive dashboards, and network failure guards.

---

## Architectural Highlights & Implementation Details

### Modular UI Component Structure (`components/`)

* **`FeedbackForm.js`**

  * Handles student input for course names, rating scores, and detailed comments.
  * Provides client-side validation for character limits and required fields.
  * Manages form state and submission logic.

* **`FeedbackCard.js`**

  * Displays individual feedback entries.
  * Includes dynamic score badges, formatted date timestamps, and metadata tags.

* **`Navbar.js`**

  * Provides a sticky navigation header across submission and dashboard views.

### Isolated API Service Layer (`services/api.js`)

* Houses a centralized data service layer.
* Implements stubbed asynchronous functions returning `Promise` objects and mock JSON records for development.
* Includes network offline checks, payload validation, and error handling.
* Uses a `USE_REAL_BACKEND` boolean flag to switch between mock data and live RESTful API endpoints during integration.

### Analytics & Data Processing

**`utils/formatters.js`** and **`pages/dashboard.js`** handle:

* Real-time aggregate metrics, including:

  * Total submission count
  * Average satisfaction score
* Multi-variable client-side filtering by:

  * Rating score
  * Text search queries
* Safe parsing of ISO timestamps into formatted dates.

---

## Directory Structure

```text
student-feedback-portal/
├── components/
│   ├── FeedbackCard.js       # Component for rendering individual feedback entries
│   ├── FeedbackForm.js       # Form input component with state validation
│   └── Navbar.js             # Global navigation header component
├── pages/
│   ├── _app.js               # Global application wrapper and CSS resets
│   ├── dashboard.js          # Analytics overview and feedback listing page
│   └── index.js              # Student feedback submission page
├── services/
│   └── api.js                # Centralized API service and mock database layer
├── utils/
│   └── formatters.js         # Data transformation and formatting utilities
├── .gitignore                # Git exclusion rules for node_modules and build files
├── package.json              # Project dependencies and operational scripts
└── README.md                 # Technical project documentation
```

---

## Installation & Setup Guide

Follow the instructions below to install and run the project on a local machine.

### Prerequisites

Ensure the following are installed:

* **Node.js** `v18.0.0` or higher
* **npm** (Node Package Manager)

### Step 1: Clone the Repository

```bash
git clone https://github.com/aditikosta/student-feedback-portal.git
cd student-feedback-portal
```

### Step 2: Install Project Dependencies

Run the following command in the project root directory:

```bash
npm install
```

This installs the required project dependencies, including:

* `next`
* `react`
* `react-dom`

### Step 3: Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

### Step 4: Access the Application

Once the development server is running, open your browser and navigate to:

* **Submission Form:** http://localhost:3000/
* **Analytics Dashboard:** http://localhost:3000/dashboard

---

## Development Notes

The project currently uses a **mock API service layer** for development and testing. The `USE_REAL_BACKEND` configuration flag in `services/api.js` can be used to switch to a real REST API when backend integration is available.

The frontend is structured to keep UI components, API communication, and data formatting logic separated for easier maintenance and future scalability.
