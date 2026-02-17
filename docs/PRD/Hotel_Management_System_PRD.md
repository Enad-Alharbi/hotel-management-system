# Hotel Management System -- Product Requirements Document (PRD)

## 1. Overview

The Hotel Management System is a web-based application designed to
streamline guest service requests and room management within a hotel
environment.

The system focuses on two primary roles: - Reception - Room (Guest)

It is intended as a real-world learning project implemented using the
MEAN stack.

## 2. Goals & Objectives

1.  Provide a simple and intuitive interface for hotel guests to submit
    service requests.
2.  Enable reception staff to manage rooms, guest stays, and incoming
    requests efficiently.
3.  Ensure clear separation of responsibilities and permissions between
    roles.
4.  Deliver a scalable MVP with clear future extensibility.

## 3. User Roles

### Reception

Responsible for: - Room account management - Guest check-in /
check-out - Handling service requests - Updating request statuses

### Room

Represents a hotel room account used by guests to: - Submit service
requests - Track request statuses

## 4. Authentication & Authorization

1.  All users must authenticate using username and password.
2.  Reception accounts are seeded initially.
3.  Room accounts are created and managed by Reception.
4.  Role-Based Access Control (RBAC) restricts access to features.
5.  JWT-based authentication will be used.

## 5. Core Features -- Reception

-   Login to Reception Portal.
-   Create Room accounts.
-   Activate / Disable Room accounts.
-   Reset Room account passwords.
-   Check-in guests with name, phone, and stay dates.
-   Check-out guests and clear stay data.
-   View all service requests.
-   Filter requests by type, status, or room.
-   Update request statuses.

## 6. Core Features -- Room

-   Login using Room credentials.
-   Access kiosk-style home page.
-   Submit service requests:
    -   COMPLAINT
    -   MAINTENANCE
    -   HOUSEKEEPING
-   View list of submitted requests.
-   View request details and status updates.
-   Logout.

## 7. Request Types

-   COMPLAINT
-   MAINTENANCE
-   HOUSEKEEPING

## 8. Request Statuses

-   OPEN
-   IN_PROGRESS
-   COMPLETED
-   CANCELLED

## 9. Messaging (Future Phase)

Message threads are displayed within request details. Two-way messaging
will be enabled in a future phase. Messaging is NOT part of MVP.

## 10. Phases & Roadmap

### Phase 1 (MVP)

-   Authentication
-   Room account management
-   Guest check-in / check-out
-   Request submission
-   Request status updates

### Phase 2

-   Two-way messaging

### Phase 3

-   Notifications and enhancements

## 11. Out of Scope

-   Kitchen module
-   Admin role
-   Payments or billing
-   Real-time messaging (for now)

## 12. Technology Stack

-   Frontend: Angular
-   Backend: Node.js (Express)
-   Database: MongoDB
-   Authentication: JWT
