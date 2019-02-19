const request = require('supertest');

const server = require('./server');
const db = require('./database/???');

// Test file set up and ready for tests to be written
describe('the route handlers', () => {
  describe('Register functionality', () => {
    test('responds with a 201 status when a customer registers', async () => {
      const body = {
        username: 'jcand12',
        password: 'pass',
        accountType: 'customer'
      };
      const response = await request(server)
        .post('/register')
        .send(body);
      expect(response.status).toBe(201);
    });
    test('responds with a 201 status when a worker registers', async () => {
      const body = {
        username: 'jcand12',
        password: 'pass',
        accountType: 'worker'
      };
      const response = await request(server)
        .post('/register')
        .send(body);
      expect(response.status).toBe(201);
    });
  });
  describe('Login functionality', () => {});
});
