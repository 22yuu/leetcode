/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const answer = [];

  const recrusion = (arr, curr) => {
    answer.push([...curr]);

    for (let i = 0; i < arr.length; i++) {
      if (i == 0 || arr[i] != arr[i - 1]) {
        curr.push(arr[i]);
        recrusion(arr.slice(i + 1), curr);
        curr.pop();
      }
    }
  };

  nums.sort((a, b) => a - b);
  recrusion(nums, []);

  return answer;
};

// other code

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  let sub = [];

  nums.sort((a, b) => a - b);
  const dfs = (idx) => {
    res.push([...sub]);
    if (idx == nums.length) return;

    for (let i = idx; i < nums.length; i++) {
      if (i > idx && nums[i] == nums[i - 1]) continue;
      sub.push(nums[i]);
      dfs(i + 1);
      sub.pop();
    }
  };

  dfs(0);
  return res;
};
