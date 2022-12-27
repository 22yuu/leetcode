/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let answer = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      answer = Math.max(answer, profit);
    } else {
      left = right;
    }
    right += 1;
  }

  return answer;
};
