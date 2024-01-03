const citiesService = require('../services/citiesService');

module.exports = {
    listAllCities: (req, res) => {
        const html = `
            <ul>
                ${citiesService.getAllCities().map(city => `<li>${city.city}</li>`).join("")}
            </ul>`;
        res.send(html);
    },
    getAllCities: (req, res) => {
        res.json(citiesService.getAllCities());
    },
    getCityDetails: (req, res) => {
        const cityName = req.params.city;
        const city = citiesService.getCityByName(cityName);
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.json({
            city: cityName,
            max_temperature: city.max_temperature,
            min_temperature: city.min_temperature,
            temp_from_yesterday: city.temp_from_yesterday,
            weather_condition: city.weather_condition,
            wind_direction: city.wind_direction
        });
    },
    createCity: (req, res) => {
        const body = req.body;
        const result = citiesService.createCity(body);
        if (result.error) {
            return res.status(400).json(result);
        }
        res.status(201).json(result);
    },
    updateCity: (req, res) => {
        const cityId = parseInt(req.params.id, 10);
        const updatedData = req.body;
        console.log('Updating city with ID:', cityId);
        console.log('Updated data:', updatedData);
        const result = citiesService.updateCity(cityId, updatedData); // Update this line
        if (result.error) {
            return res.status(404).json(result);
        }
        res.status(200).json(result);
    },
    partialUpdateCity: (req, res) => {
        const cityId = parseInt(req.params.id, 10);
        const updatedData = req.body;
        const result = citiesService.partialUpdateCity(cityId, updatedData);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    },
};
