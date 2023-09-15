"use strict";

/**
 * Takes in sorted array of numbers, nums, and a numeric targetAvg.
 * If there is a pair of numbers in nums where the average of the pair equals
 * targetAvg, return true. Otherwise, return false.
 */
function averagePair(nums, targetAvg) {
  // x declare a left pointer starting on the left side of nums.
  let left = 0;
  // x declare a right pointer starting on the right side of nums.
  let right = nums.length - 1;
  // while left < right
  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    // x if the average of left and right equals targetAvg, return true.
    if (avg === targetAvg) return true;
    // x if the average of left and right > targetAvg, move right one space to the left.
    else if (avg > targetAvg) {
      right -= 1;
    }
    // x otherwise, move left one space to the right.
    else {
      left += 1;
    }
  }

  // x if we make it out of the while loop, return false.
  return false;
}

