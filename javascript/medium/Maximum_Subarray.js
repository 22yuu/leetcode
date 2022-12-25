/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;
  // Number.MIN_VALUE는 음수가 아닌 0에 가까운 수
  // 그러므로 -Number.MAX_VALUE나 -Infinity

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }

  return max;
};
