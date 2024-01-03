const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname,'..','..', 'data.json');

const readDataFromFile = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data file:', error.message);
        return [];
    }
};

const writeDataToFile = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing data file:', error.message);
    }
};

module.exports = {
    getAllCities: () => {
        return readDataFromFile();
    },
    getCityByName: (cityName) => {
        const cities = readDataFromFile();
        return cities.find(c => c.city.toLowerCase() === cityName.toLowerCase());
    },
    createCity: (newCity) => {
        const cities = readDataFromFile();
        newCity.id = cities.length + 1;
        cities.push(newCity);
        writeDataToFile(cities);
        return { status: 'success', id: newCity.id };
    },
    updateCity: (cityId, updatedData) => {
        console.log('Service: Updating city with ID:', cityId);
        console.log('Service: Updated data:', updatedData);
        if (!updatedData || Object.keys(updatedData).length === 0) {
            return { error: 'Invalid update data' };
        }

        const cities = readDataFromFile();
        const cityIndex = cities.findIndex((c) => c.id === cityId);

        if (cityIndex === -1) {
            return { error: 'City not found' };
        }

        cities[cityIndex] = { ...cities[cityIndex], ...updatedData };
        writeDataToFile(cities);

        return { status: 'success', updatedCity: cities[cityIndex] };
    },


};
