const assert = require('assert');
const buildMessage = require('../schemas/buildMessage');

describe.only('utils - buildMessage', function(){
  describe('when receives an entity and an action', function() {
    it('should return the respective message', function(){
      const result = buildMessage('movie', 'create');
      const expect = "movie created";
      assert.strictEqual(result, expect);
    })
  })
  describe('when receives an entity and an action is a list', function() {
    it('should return the respective message with the entity in plural', function(){
      const result = buildMessage('movie', 'list');
      const expect = "movies listed";
      assert.strictEqual(result, expect);
    })
  })
  describe('when receives an entity and an action is a movie', function() {
    it('should return the respective message with the movie retrieved', function(){
      const result = buildMessage('movie', 'retrieve');
      const expect = "movie retrieved";
      assert.strictEqual(result, expect);
    })
  })
})