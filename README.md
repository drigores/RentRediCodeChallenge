# RentRedi — User endpoints

Description
- Backend provides CRUD endpoints for users stored in a NoSQL database (Firebase Realtime Database used).
- Front-end (React) was initially generated using AI and then customized to improve productivity and demonstrate deep product knowledge.
- Front-end supports two read modes: direct API mode (calls the backend endpoints) and Firebase Realtime Database mode (reads /users). Both modes are implemented.

Features
- CRUD endpoints for users
- Users schema: id, name, zip_code, latitude, longitude, timezone
- Create: accept name and zip_code; backend fetches latitude, longitude and timezone (OpenWeatherMap)

OpenWeatherMap integration
- API used: Current Weather Data (by zip) to obtain coord and timezone.
- Example request:
  - GET https://api.openweathermap.org/data/2.5/weather?zip={ZIP},{COUNTRY_CODE}&appid=7afa46f2e91768e7eeeb9001ce40de19
- The backend extracts:
  - coord.lat -> latitude
  - coord.lon -> longitude
  - timezone (seconds offset) -> timezone (store as offset or resolved zone as implemented)

API Endpoints
- GET /users
  - Returns list of users
- POST /users
  - Body: { "name": "string", "zip_code": "string" }
  - Response: created user with id, latitude, longitude, timezone
- PUT /users/:id
  - Body: { "name"?: "string", "zip_code"?: "string" }
  - If zip_code changed, backend re-fetches lat/lon/timezone
- DELETE /users/:id
  - Deletes user

Data model (example)
{
  "id": "uuid",
  "name": "Jane Doe",
  "zip_code": "10001",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "timezone": -18000
}

Firebase
- Realtime Database path used: /users
- Front-end can optionally read users directly from Firebase instead of the API (toggle in FE).
- Ensure Firebase credentials/config are provided to the front-end.

How to run
- From project root: docker-compose up
- Open: http://localhost:8080

Notes
- OpenWeather API key included above (7afa46f2e91768e7eeeb9001ce40de19).
- Backend enforces re-fetch of location/timezone on create and whenever zip_code changes on update.
- Feel free to extend front-end with UI for toggling API vs Firebase mode or add caching/error handling.

Repository layout (suggested)
- /backend — API server, Firebase integration, OpenWeather fetch logic
- /frontend — React app (AI-generated + customized) with API/Firebase modes
- docker-compose.yml — starts backend, frontend, and emulator/DB if used

Contact
- Implementation details and deployment notes in-code and in service README files.