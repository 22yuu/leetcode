/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let answer = 0;
  const n = nums.length;
  let curEnd = 0,
    curFar = 0;

  for (let i = 0; i < n - 1; i++) {
    curFar = Math.max(curFar, i + nums[i]);

    if (i == curEnd) {
      answer++;
      curEnd = curFar;
    }
  }

  return answer;
};
