const request = require('supertest');
const app = require('../src/app');

describe('Webhook Endpoint', () => {
    it('should respond with success for valid webhook', async () => {
        const response = await request(app)
            .post('/webhook')
            .send({ action: 'push' });

        expect(response.status).toBe(200);
        expect(response.text).toBe('Webhook received successfully');
    });
});