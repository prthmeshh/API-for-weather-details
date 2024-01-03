
const geolocationService = require('../services/geolocationService');

const getGeolocation = (req, res) => {
    try {
        const geolocationData = geolocationService.getGeolocationData();
        res.json(geolocationData);
    } catch (error) {
        console.error('Error in geolocation controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    getGeolocation,
};

