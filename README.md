# Flights and Search Service

This microservice handles the storage, schedule creation, and advanced search queries for flights, airports, airplanes, and cities.

## Features
- **City CRUD**: Management of operational city destinations.
- **Airport Management**: Creates and links airports to specific cities.
- **Flight Scheduling**: Creates flight entries referencing specific airplanes, arrival/departure airports, schedules, and pricing.
- **Advanced Search Filters**: Filter flights dynamically by price ranges, departure/arrival airports, dates, and number of remaining seats.
- **Seat Management**: Exposed `PATCH` route to update remaining flight seats when seats are booked or cancelled.

---

## Setup & Configuration

1. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   ```
2. Configure your MySQL credentials in `src/config/config.json`.
3. Install dependencies and initialize the database:
   ```bash
   npm install
   npx sequelize db:create
   npx sequelize db:migrate
   ```
4. Seed default airport and airplane data:
   ```bash
   npx sequelize db:seed:all
   ```
5. Start the service:
   ```bash
   npm start
   ```

---

## DB Design & Relationships
- **City $\leftrightarrow$ Airport**: One-to-Many. A city can contain multiple airports, but an airport belongs to a single city.
- **Airplane $\leftrightarrow$ Flight**: One-to-Many. An airplane can fly multiple flight schedules, but a flight belongs to a single airplane.
- **Airport $\leftrightarrow$ Flight**: One-to-Many. An airport hosts many departing/arriving flights.

---

## API Endpoints

### 1. Cities
*   **Create City**: `POST /api/v1/city`
    ```json
    { "name": "New Delhi" }
    ```
*   **Delete City**: `DELETE /api/v1/city/:id`
*   **Get City**: `GET /api/v1/city/:id`
*   **Update City**: `PUT /api/v1/city/:id`
    ```json
    { "name": "Delhi NCR" }
    ```

### 2. Airports
*   **Create Airport**: `POST /api/v1/airport`
    ```json
    {
      "name": "Indira Gandhi International Airport",
      "address": "New Delhi, Delhi",
      "cityId": 1
    }
    ```

### 3. Flights
*   **Create Flight**: `POST /api/v1/flights`
    ```json
    {
      "flightNumber": "AI-101",
      "airplaneId": 1,
      "departureAirportId": 1,
      "arrivalAirportId": 2,
      "arrivalTime": "2026-07-15T15:30:00Z",
      "departureTime": "2026-07-15T12:00:00Z",
      "price": 4500,
      "boardingGate": "Gate A3"
    }
    ```
*   **Search Flights**: `GET /api/v1/flights`
    *   *Query Parameters (optional)*: `?departureAirportId=1&arrivalAirportId=2&minPrice=3000&maxPrice=6000&date=2026-07-15&tripType=oneWay`
*   **Update Flight details/seats**: `PATCH /api/v1/flights/:id`
    ```json
    {
      "totalSeats": 120
    }
    ```