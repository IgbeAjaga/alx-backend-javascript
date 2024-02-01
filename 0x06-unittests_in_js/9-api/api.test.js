const request = require('supertest');
const app = require('./api');

describe('GET /cart/:id', () => {
  it('responds with payment methods for valid id', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.text).toEqual('Payment methods for cart 12');
    expect(response.statusCode).toBe(200);
  });

  it('responds with 404 for invalid id', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.statusCode).toBe(404);
  });
});
