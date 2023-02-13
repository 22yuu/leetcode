/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];

  const recrusion = (path, index) => {
    answer.push(path);

    for (let i = index; i < nums.length; i++) {
      recrusion([...path, nums[i]], i + 1);
    }
  };

  recrusion([], 0);

  return answer;
};
