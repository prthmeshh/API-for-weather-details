
let geolocationData = {
    latitude: 37.7749,
    longitude: -122.4194,
    city: 'San Francisco',
    country: 'USA',
};

module.exports = {
    getGeolocation: () => {
        return geolocationData;
    },

    updateGeolocation: (latitude, longitude, city, country) => {
        geolocationData = {
            latitude,
            longitude,
            city,
            country,
        };
    },
};
