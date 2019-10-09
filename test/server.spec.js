const expect = require('chai').expect
const server = require('../src/App');

describe('test', () => {
  it('should return a string', () => {
    expect('Hello from App Engine!').to.equal('Hello from App Engine!');
  });
});