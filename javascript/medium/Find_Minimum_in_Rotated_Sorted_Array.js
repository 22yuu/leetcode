/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) start = mid + 1;
    else end = mid;
  }
  return nums[start];
};

// other code
var findMin = function (nums) {
  for (i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }

  return nums[0];
};
