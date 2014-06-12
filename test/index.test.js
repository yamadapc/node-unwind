'use strict'; /* global describe, it */
var assert = require('assert');
var unwind = require('..');

describe('unwind-path', function() {
  describe('unwind(path, value)', function() {
    it('unwinds simple paths ("a", 2) => { a: 2 }', function() {
      var obj;

      obj = unwind('something', 2);
      assert.deepEqual(obj, { something: 2 });

      obj = unwind('asdf', {});
      assert.deepEqual(obj, { asdf: {} });
    });

    it('unwinds nested paths ("a.b", 2) => { a: { b: 2 } }', function() {
      var obj = unwind('something.else', 2);
      assert.deepEqual(obj, { something: { else: 2 } });
    });
  });
});
