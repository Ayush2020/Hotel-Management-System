# Hotel Management System

This is a comprehensive hotel management system developed for i-Transform to automate major hotel operations including reservations, room management, guest management, inventory control, staff management, and administration.

## Features

- **User Management**: Different user roles (Owner, Manager, Receptionist) with appropriate access controls
- **Guest Management**: Add, update, search, and delete guest information
- **Room Management**: Add, update, delete, and search rooms with different types and rates
- **Reservation System**: Make, update, and cancel reservations with check-in/check-out tracking
- **Billing System**: Generate invoices and process payments
- **Staff Management**: Manage staff information and departments
- **Inventory Management**: Track hotel inventory items with reordering capabilities
- **Reporting**: Generate various reports for hotel operations

## Technology Stack

- **Backend**: Spring Boot 3.2.0, Spring Security, Spring Data JPA
- **Frontend**: Angular 19.2, HTML, CSS
- **Database**: H2 Database (for development), with JPA for ORM
- **Security**: JWT Token-based authentication and authorization
- **Messaging**: RabbitMQ for asynchronous processing
- **Cloud**: Spring Cloud for microservices architecture
- **Containerization**: Docker for deployment

## Project Structure

The project follows a standard Spring Boot application structure:

- `src/main/java/com/itransform/hms/`
  - `controller/` - REST API controllers
  - `model/` - Entity models
  - `repository/` - Data access layers
  - `service/` - Business logic layers
  - `security/` - Authentication and authorization
  - `payload/` - Request/Response DTOs
  - `config/` - Application configurations

## Getting Started

### Prerequisites

- Java 17+
- Maven 3.6+
- Node.js 18+ (for Angular frontend)
- Docker (optional for containerization)
- RabbitMQ (can be run in Docker)

### Running the Application

1. Clone this repository
2. Build the backend:
   ```
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```
4. The application will be available at `http://localhost:8080`
5. For development, H2 console is available at `http://localhost:8080/h2-console`

## API Documentation

The REST API is secured with JWT authentication. You'll need to authenticate first to access the endpoints.

### Authentication

- `POST /api/auth/signin` - Authenticate a user
- `POST /api/auth/signup` - Register a new user

### Guests

- `GET /api/guests` - Get all guests
- `GET /api/guests/{id}` - Get a specific guest
- `POST /api/guests` - Create a new guest
- `PUT /api/guests/{id}` - Update a guest
- `DELETE /api/guests/{id}` - Delete a guest
- `GET /api/guests/search` - Search guests by criteria

### Rooms

- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/{id}` - Get a specific room
- `POST /api/rooms` - Create a new room
- `PUT /api/rooms/{id}` - Update a room
- `DELETE /api/rooms/{id}` - Delete a room
- `GET /api/rooms/available` - Get available rooms for a date range
- `GET /api/rooms/type/{type}` - Get rooms by type

### Reservations

- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/{id}` - Get a specific reservation
- `POST /api/reservations` - Create a new reservation
- `PUT /api/reservations/{id}` - Update a reservation
- `DELETE /api/reservations/{id}` - Delete a reservation
- `PATCH /api/reservations/{id}/status` - Update reservation status
- `GET /api/reservations/guest/{guestId}` - Get reservations by guest
- `GET /api/reservations/arrivals` - Get expected arrivals
- `GET /api/reservations/departures` - Get expected departures

## Security

The application uses role-based access control with three levels:

- **Owner**: Full access to all features
- **Manager**: Access to most features with some restrictions
- **Receptionist**: Limited access, primarily to reservation and guest management

## License

This project is proprietary and owned by i-Transform. 