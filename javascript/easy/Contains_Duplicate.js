/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const checkDistinct = new Set(nums).size;

  return nums.length === checkDistinct;
};

console.log(containsDuplicate([1, 2, 3, 4, 1]));
