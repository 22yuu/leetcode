/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) return mid;

    if (nums[mid] > nums[start]) {
      if (target >= nums[start] && nums[mid] > target) end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      if (target <= nums[end] && nums[mid] < target) start = mid + 1;
      else end = mid - 1;
    } else {
      break;
    }
  }

  return nums[end] === target ? end : -1;
};
