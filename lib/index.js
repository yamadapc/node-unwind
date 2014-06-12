'use strict';
/**
 * unwind
 * ======
 *
 * Generate objects based on a (possibly nested) path and a value.
 */
exports = module.exports = unwind;

/**
 * Generates a simple object based on a (possibly nested) path, and the value
 * associated with it.
 *
 * @param {String} path A path, or nested path - a representation of nested keys
 * @param {Mixed} value The value to set to this path
 * @return {Object} The generated object
 *
 * @example
 *   unwind('something.nested', 10)
 *   // => { something: { nested: 10 } }
 *   unwind('something', 'else')
 *   // => { something: 'else' }
 */

function unwind(path, value) {
  var spath = path.split('.');

  var ret = {},
      iter = ret,
      k = spath[0];

  for(var i = 0, len = spath.length - 1; i < len; k = spath[++i]) {
    iter[k] = {};
    iter = iter[k];
  }

  iter[k] = value;

  return ret;
}
