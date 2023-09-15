"use strict";

/**
 * Accepts two strings, word and letters. If word can be made from letters,
 * return true. Otherwise, return false. Assumes only lowercase for words
 * and letters.
 */
function canConstructWord(word, letters) {
  // If there are more chars in word than letters return false.
  if (word.length > letters.length) return false;

  // x Build a frequency counter.

  // x Get the frequencies of each char in word.
  const wordFreqs = getFrequencyCounts(word);

  // x Get the frequencies of each char in letter.
  const letterFreqs = getFrequencyCounts(letters);

  // x if any letter in word is not in letter freqs, or the value of that key
  // in letter freqs is < that letter's key in word freqs, return false.
  for (let char in wordFreqs) {
    if (!(char in letterFreqs)) return false; // Char isn't even in letters
    if (letterFreqs[char] < wordFreqs[char]) return false;
  }
  // x if we get to the end of the loop, return true.
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