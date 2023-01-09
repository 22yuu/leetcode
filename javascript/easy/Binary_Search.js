/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// my code R: 79% / M: 79%
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// other code
var search = function (nums, target) {
  var l = 0,
    r = nums.length - 1,
    m;

  while (l <= r) {
    m = (l + r) >> 1;
    if (nums[m] == target) return m;
    nums[m] < target ? (l = m + 1) : (r = m - 1);
  }
  return -1;
};
