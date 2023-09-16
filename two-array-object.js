"use strict";

/**
 * Takes in an array of keys and an array of values. Returns an object with
 * keys as keys and values as values. If there are not enough values, the
 * remaining keys have values of null. If there are not enough keys, the remaining
 * values are ignored.
 */
function twoArrayObject(keys, values) {
  const obj = {};
  for (let i=0; i<keys.length; i++) {
    const key = keys[i];
    const value = values[i] ? values[i] : null;
    obj[key] = value;
  }
  return obj;
}
