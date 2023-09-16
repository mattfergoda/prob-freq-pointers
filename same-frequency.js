"use strict";

/**
 * Takes in two positive integers and returns true if they have the same
 * frequency of digits. Otherwise, returns false.
 */
function sameFrequency(int1, int2) {
  // x convert int1 and int2 to strings.
  const int1Str = String(int1);
  const int2Str = String(int2);
  // x if int 1 and int 2 aren't the same length, return false.
  if (int1Str.length !== int2Str.length) return false;

  // x build a frequency counter.

  // x Get frequencies of int 1 and int 2
  const int1Freqs = getFrequencyCounts(int1Str);
  const int2Freqs = getFrequencyCounts(int2Str);

  // x for each key in int 1 frequency counts
  for (let key in int1Freqs) {
    // x if this key isn't in int 2 frequency counts, return false
    if (!(key in int2Freqs)) return false;
    // x if this key's value in int 1 and int 2 freq counts don't match, return false.
    if (int1Freqs[key] !== int2Freqs[key]) return false;
  }

  // x if we make it out of the for loop, return true.
  return true;
}

/**
 * Takes in a string and counts the frequency of each char in the string.
 * Returns an object where each key is a unique item and its value is the
 * frequency.
 */
function getFrequencyCounts(str) {
  let freqs = {};

  for (const char of str) {
    const count = (freqs[char] || 0) + 1;
    freqs[char] = count;
  }

  return freqs;
}