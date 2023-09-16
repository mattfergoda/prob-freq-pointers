"use strict";

/**
 * Takes two strings s1 and s2. Returns true if the characters in s1 form a
 * subsequence of the characters in s2, preserving order. Otherwise, returns
 * false.
 */
function isSubsequence(s1, s2) {

  if (s1.length > s2.length) return false;

  let s1Pointer = 0;
  let s2Pointer = 0;

  while (s1Pointer < s1.length) {
    const thisS1Char = s1[s1Pointer];

    while (s2Pointer < s2.length) {
      const thisS2Char = s2[s2Pointer];

      if (thisS1Char === thisS2Char) {
        s1Pointer++;
        break;
      } else {
        s2Pointer++;
      }
    }
    return false;
  }
  return true;
}
