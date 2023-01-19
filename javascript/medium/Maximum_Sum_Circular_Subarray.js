/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let prevMax = nums[0];
  let max = nums[0];
  let prevMin = nums[0];
  let min = nums[0];
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    prevMax = Math.max(current, current + prevMax);
    max = Math.max(max, prevMax);
    prevMin = Math.min(current, current + prevMin);
    min = Math.min(min, prevMin);

    total += current;
  }

  return max < 0 ? max : Math.max(max, total - min);
};
