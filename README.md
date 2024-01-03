Weather Details API
Overview
This project provides a backend/middle-tier solution for fetching and managing historical temperature data for various cities in India. The goal is to create an interface to showcase temperature details, identify anomalies, fetch the current location, and update temperature data in the database.

API Endpoints
1. GET /temperature/{city}
Retrieve temperature details for a specific city.

Parameters:
city: Name of the city for which temperature details are requested.
2. POST /temperature
Submit new temperature data.

Request Body:
json
Copy code
{
  "city": "CityName",
  "date": "YYYY-MM-DD",
  "temperature": 30.5
}
3. PUT /temperature/{city}/{date}
Update temperature data for a specific city and date.

Parameters:
city: Name of the city for which temperature details are being updated.
date: Date for which temperature details are being updated.
Request Body:
json
Copy code
{
  "temperature": 32.0
}
4. UPDATE /anomalies
Fetch anomalies in temperature changes from yesterday.

5. GET /current-location
Fetch the current location.

6. GET /temperature-trends
Retrieve temperature trends for the hottest and coldest cities over the past years.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-details-api.git
Install dependencies:

bash
Copy code
cd weather-details-api
npm install
Set up the database with historical temperature data.

Configure environment variables (if necessary).

Usage
Start the server:

bash
Copy code
npm start
Access the API at http://localhost:3000.

API Documentation
Detailed API documentation can be found in the API Documentation file.

Test Cases
Test cases for the API can be found in the TEST_CASES.md file.

Deployment
The application is deployed on Heroku.
