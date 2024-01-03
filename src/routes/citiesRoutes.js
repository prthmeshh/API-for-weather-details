const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');



// GET /cities - List all cities
router.get("/cities", citiesController.listAllCities);

// GET /api/cities - JSON Document Render
router.get("/api/cities", citiesController.getAllCities);

// GET /api/cities/:city - City details by name
router.get("/api/cities/:city", citiesController.getCityDetails);

// POST /api/cities - Create new city data
router.post("/api/cities", citiesController.createCity);

// PUT /api/cities/:id - Update city data by ID
router.put("/api/cities/:id", citiesController.updateCity);

// PATCH /api/cities/:id - Partially update city data by ID
router.patch("/api/cities/:id", citiesController.partialUpdateCity);

module.exports = router;
