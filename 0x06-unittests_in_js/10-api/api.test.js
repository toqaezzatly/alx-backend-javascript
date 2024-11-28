const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 404 for invalid routes', (done) => {
    request.get(`${API_URL}/invalid-route`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct payment methods object', (done) => {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const expectedPayment = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPayment);
      done();
    });
  });
});

describe('Login', () => {
  const API_URL = 'http://localhost:7865';

  it('should return Welcome message with valid userName', (done) => {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: {
        userName: 'Betty'
      }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should handle missing userName', (done) => {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: {}
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});
