const expect = require('chai').expect
const server = require('../server');

describe('test', () => {
  it('should return a string', () => {
    expect('Hello from App Engine!').to.equal('Hello from App Engine!');
  });
});