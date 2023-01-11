/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// my code
var moveZeroes = function (nums) {
  if (nums.length === 1 && nums[0] === 0) return nums;

  let swap = function (a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] !== 0) {
        swap(nums, i, j);
        break;
      }
    }
  }

  return nums;
};

// other code

const moveZeroes = (nums) => {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
    right++;
  }
  return nums;
};
