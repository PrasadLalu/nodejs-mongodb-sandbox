require('dotenv').config({ path: '.env.test' });
const server = require('../src/server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const mongoose = require('mongoose');

chai.use(chaiHttp);

beforeEach(async function () {
  await mongoose.connection.db.dropDatabase();
});

describe('User Registration API', function () {
    it('should successfully create a new user with valid data', async function () {
        const response = await chai.request(server)
            .post('/api/v1/auth/register')
            .send({ name: 'John Doe', email: 'john.doe@example.com', password: 'Test@123', role: '6810905ba7c8aa2c3c165e04' });

        expect(response).to.have.status(200);
        expect(response.body).to.have.property('data')
        expect(response.body).to.have.property('data').property('_id')
    });
});

