// my code
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];

      if (sum === target) return [i, j];
    }
  }
};

/* for 문 1개
var twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - firstNum;
    if (secondNum in seen) {
      return [seen[secondNum], i];
    }
    seen[firstNum] = i;
  }

  return [0, 0];
};*/

console.log(twoSum([2, 7, 11, 15], 9));
