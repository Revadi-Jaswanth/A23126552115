# Campus Notifications Dashboard

## Overview

This project was developed as part of the AffordMed Frontend Evaluation.

The application provides a centralized dashboard for viewing and managing campus notifications such as Placement Drives, Academic Results, and Events. Users can prioritize important notifications, mark notifications as read, filter notifications by category, and navigate through notifications efficiently.

---

## Features

### Priority Notifications

* Placement notifications are given highest priority.
* Result notifications are given medium priority.
* Event notifications are given lower priority.
* Unread notifications are prioritized over read notifications.

### Read / Unread Tracking

* Notifications can be marked as read.
* Read status is stored using browser localStorage.
* Read status persists across page refreshes.

### Filtering

Users can filter notifications by:

* Placement
* Result
* Event

### Pagination

* Pagination implemented using Material UI Pagination component.

### Responsive Design

* Desktop-friendly layout.
* Mobile responsive design using Material UI Grid system.

### Logging Middleware Integration

Reusable logging middleware integrated throughout the application.

Example:

```javascript
Log(
  "frontend",
  "info",
  "page",
  "Home page loaded"
);
```

---

## Technology Stack

* React
* TypeScript
* Vite
* Material UI
* Axios

---

## Project Structure

```text
src/
├── api/
│   └── notificationApi.ts
│
├── components/
│   ├── NotificationCard.tsx
│   ├── NotificationList.tsx
│   └── PriorityNotifications.tsx
│
├── pages/
│   └── Home.tsx
│
├── types/
│   └── Notification.ts
│
├── utils/
│   └── logger.ts
```

---

## Logging Middleware

A reusable logging middleware was implemented following the AffordMed evaluation requirements.

### Function Signature

```javascript
Log(
  stack,
  level,
  packageName,
  message
);
```

### Example

```javascript
Log(
  "frontend",
  "info",
  "api",
  "Fetching notifications"
);
```

---

## API Testing Observation

During implementation, the Notification API endpoint consistently returned:

```json
{
  "message": "invalid authorization token"
}
```

with HTTP Status:

```text
401 Unauthorized
```

Investigation showed that the provided JWT token references:

```text
http://20.244.56.144/evaluation-service
```

while the Notification API endpoint provided for Stage 2 is:

```text
http://4.224.186.213/evaluation-service/notifications
```

This mismatch may cause token validation failure if audience validation is enabled.

To ensure completion of the frontend evaluation, API integration was retained and a fallback mock dataset was used when authentication failures occurred.

All required frontend functionality remains fully implemented and operational.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

