"use strict";

/**
 * Takes an array of non-zero numbers nums that is not necessarily sorted.
 * Returns the same array with the positive numbers to the left and the negative
 * numbers to the right.
 */
function separatePositive(nums) {
  let divider = 0; // Points to where we are in nums.
  let counter = 0; // Keeps track of how many nums we've looked at.

  while (counter < nums.length) {
    const num = nums[divider];
    console.log("divider = ", divider);
    console.log("num = ", num);

    if (num < 0) {
      nums.push(num);
      nums.splice(divider, 1);
    } else {
      // Only move divider if there are no more negative numbers left of it.
      divider++;
    }
    counter++;
    console.log("nums = ", nums);
  }
  return nums;
}
