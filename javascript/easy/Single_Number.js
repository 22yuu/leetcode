// 136. Single Number
// my code
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
      continue;
    }

    map[nums[i]] += 1;
  }

  const keys = Object.keys(map);

  for (let key of keys) {
    if (map[key] === 1) {
      return key;
    }
  }
};

// other codes
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i];
  }
  return temp;
};

var singleNumber = function (nums) {
  let counter = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!counter.has(nums[i])) {
      counter.set(nums[i], 1);
    } else {
      counter.delete(nums[i]);
    }
  }
  return [...counter.keys()][0];
};
