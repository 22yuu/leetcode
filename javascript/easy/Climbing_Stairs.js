/**
 * @param {number} n
 * @return {number}
 */
// my code using dp

var climbStairs = function (n) {
  let dp = new Array(n + 1);

  (dp[1] = 1), (dp[2] = 2);

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// other code using recrusion
var climbStairs = function (n, memo = new Array()) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo[n] = res;
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
