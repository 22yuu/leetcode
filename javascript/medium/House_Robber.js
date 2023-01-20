/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let dp = new Array(nums.length + 1);

  dp[0] = nums[0];
  dp[1] = nums[1];

  max = Math.max(dp[0], dp[1]);

  for (let i = 2; i < nums.length; i++) {
    for (let j = i - 2; j >= 0; j--) {
      max = Math.max(max, dp[j] + nums[i]);
    }

    dp[i] = max;
  }

  return max;
};

// other code
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let map = new Map();

  const dp = (i) => {
    if (i == 0) return nums[0];
    if (i == 1) return Math.max(nums[0], nums[1]);

    if (!map.has(i)) {
      map.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]));
    }

    return map.get(i);
  };

  return dp(nums.length - 1);
};
