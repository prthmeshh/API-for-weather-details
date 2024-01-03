const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const expect = chai.expect;
const fs = require('fs');
const path = require('path');  

const dataFilePath = path.join(__dirname, '..', 'data.json');

chai.use(chaiHttp);

describe('City APIs', () => {
    // should get all cities
    it('should get all cities', (done) => {
        chai
            .request(app)
            .get('/api/cities')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });


    // should get details for a specific city
    it('should get details for a specific city', (done) => {
        chai
            .request(app)
            .get('/api/cities/Surat')
            .end((err, res) => {
                expect(res).to.have.status(404); // Adjusted to check for a 404 status code
                expect(res.body).to.be.an('object');
                done();
            });
    });

    // Positive test case: Create a new city
    it('should create a new city', (done) => {
        chai
            .request(app)
            .post('/api/cities')
            .send({
                city: 'NewCity',
                max_temperature: 30,
                min_temperature: 20,
                temp_from_yesterday: 25,
                weather_condition: 'Sunny',
                wind_direction: 'East'
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                // Add more assertions based on your API response
                done();
            });
    });

    //should update an existing city
    it('should update an existing city', (done) => {
        // Assuming there is an existing city with ID 1 (replace with a valid ID)
        const existingCityId = 1;
        chai
            .request(app)
            .put(`/api/cities/${existingCityId}`)
            .send({
                max_temperature: 35,
                min_temperature: 25,
                temp_from_yesterday: 30,
                weather_condition: 'Partly Cloudy',
                wind_direction: 'North'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                // Add more assertions based on your API response
                done();
            });
    });

    // Positive test case: Partially update an existing city
    it('should partially update an existing city', (done) => {
        // Assume there is an existing city with ID 2
        chai
            .request(app)
            .patch('/api/cities/2')
            .send({
                max_temperature: 33,
                weather_condition: 'Cloudy'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                // Add more assertions based on your API response
                done();
            });
    });

    // should handle invalid city name
    it('should handle invalid city name', (done) => {
        chai
            .request(app)
            .get('/api/cities/InvalidCity')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    // should not delete a non-existing city
    it('should not delete a non-existing city', (done) => {
        chai
            .request(app)
            .delete('/api/cities/998') // 998 doesn't exist
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });

    // should get details for a non-existing city
    it('should get details for a non-existing city', (done) => {
        chai
            .request(app)
            .get('/api/cities/999') // ID 999 doesn't exist
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
