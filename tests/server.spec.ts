import { expect } from 'chai';
import 'mocha';
import app from "../src/App";

describe('test', () => {
  it('should return a string', () => {
    expect('Hello from App Engine!').to.equal('Hello from App Engine!');
  });
});