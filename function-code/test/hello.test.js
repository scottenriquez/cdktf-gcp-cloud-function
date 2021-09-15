const mocha = require('mocha');
const chai = require('chai');
const helloService = require('../service/hello.js');

const { expect } = chai;
const { describe } = mocha;
const { it } = mocha;

describe('Hello service', () => {
  describe('sayHello', () => {
    it('should return the query when both a body and query are present', () => {
      // arrange
      const requestQueryName = 'query';
      const requestBodyName = 'body';
      const expectedOutput = 'Hello, query!';

      // act
      const actualOutput = helloService.sayHello(
        requestQueryName,
        requestBodyName
      );

      // assert
      expect(actualOutput).to.deep.equal(expectedOutput);
    });
    it('should return the body when only a body is present', () => {
      // arrange
      const requestQueryName = '';
      const requestBodyName = 'body';
      const expectedOutput = 'Hello, body!';

      // act
      const actualOutput = helloService.sayHello(
        requestQueryName,
        requestBodyName
      );

      // assert
      expect(actualOutput).to.deep.equal(expectedOutput);
    });
    it('should return "world" when neither a body and query are present', () => {
      // arrange
      const requestQueryName = '';
      const requestBodyName = '';
      const expectedOutput = 'Hello, world!';

      // act
      const actualOutput = helloService.sayHello(
        requestQueryName,
        requestBodyName
      );

      // assert
      expect(actualOutput).to.deep.equal(expectedOutput);
    });
  });
});
