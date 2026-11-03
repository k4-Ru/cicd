const request = require('supertest');
const app = require('../src/app');

describe('POST /api/login', () => { 

    test('it should return 200 for successfully login', async () => {
        const response = await request(app)
        .post('/api/login')
        .send({
            username: 'Carl Nicolas!',
            password: 'password123'
        });
        expect(response.statusCode).toBe(200);
    });

    test('it should return 401 for invalid credentials', async () => {
        const response = await request(app)
        .post('/api/login')
        .send({
            username: 'invaliduser',
            password: 'invalidpassword'
        });
        expect(response.statusCode).toBe(401);
        expect(response.body).toBe('Invalid credentials');
    
    });

    test('reject any missing fields', async () => {
        const response = await request(app)
        .post('/api/login')
        .send({
            username: '',
            password: ''
        });
        expect(response.statusCode).toBe(400);
        expect(response.body).toBe('Missing fields');
    });
});