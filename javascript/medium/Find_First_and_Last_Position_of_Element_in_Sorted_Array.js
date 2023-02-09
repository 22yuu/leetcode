/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length == 0 || nums.indexOf(target) == -1) {
    return [-1, -1];
  }

  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      if (first == -1) {
        first = i;
      }
      last = i;
    }
  }

  return [first, last];
};

// other code

const searchRange = function (nums, target) {
  return [nums.findIndex((ele) => ele === target), nums.lastIndexOf(target)];
};
