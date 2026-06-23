# Stage 1

## Priority Logic

Notifications are ranked as:

1. Placement
2. Result
3. Event

Unread notifications are prioritised over read notifications.

Within the same category, notifications are sorted by latest timestamp.

---

## Read Tracking

Read notifications are stored in browser localStorage.

---

## Technology Stack

- React
- TypeScript
- Material UI
- Axios

---

## Components

- NotificationCard
- NotificationList
- PriorityNotifications

---

## Pagination

Implemented using Material UI Pagination.

---

## Filtering

Supports:

- Placement
- Result
- Event

---

## API Testing Observation

During implementation, the Notification API endpoint was tested using the frontend application, Node.js scripts, and Postman.

The API consistently returned:

json
{
  "message": "invalid authorization token"
}


with HTTP Status 401 Unauthorized.

Investigation showed that the provided JWT token contains an audience (`aud`) claim referencing:

http://20.244.56.144/evaluation-service


while the Notification API endpoint provided for Stage 2 is:

http://4.224.186.213/evaluation-service/notifications

This host mismatch may cause token validation failure if audience verification is enabled on the backend.

To ensure completion of the frontend evaluation, the API integration was retained and a fallback mock dataset was used only when authentication failures occurred.

All required frontend functionality including:

- Notification Display
- Priority Notifications
- Filtering
- Pagination
- Read/Unread Tracking
- Logging Middleware Integration

remains fully implemented and functional.