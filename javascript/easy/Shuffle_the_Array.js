/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// my code
var shuffle = function (nums, n) {
  let index = 0;

  const array1 = nums.slice(0, n);
  const array2 = nums.slice(n, 2 * n);
  const newArray = [];

  for (let i = 0; i < nums.length; i += 2) {
    newArray.push(array1[index]);
    newArray.push(array2[index]);
    index += 1;
  }

  return newArray;
};

// other code
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }
  return result;
};
