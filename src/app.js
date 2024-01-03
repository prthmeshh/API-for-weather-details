const express = require("express");
const app = express();
const PORT = 8007;
const path = require('path');



// Middleware-plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes
const citiesRoutes = require(path.join(__dirname, 'routes', 'citiesRoutes'));
const geolocationRoutes = require(path.join(__dirname, 'routes', 'geolocationRoutes'));




// Using the routes
app.use('/api', citiesRoutes);
app.use('/api', geolocationRoutes);


app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));


module.exports = app;
