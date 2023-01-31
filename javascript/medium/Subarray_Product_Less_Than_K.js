/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) answer += 1;
    else continue;

    let product = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];

      if (product < k) {
        answer += 1;
      } else {
        break;
      }
    }
  }

  return answer;
};

// other code

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0; // no subarrays will have a product less than 1 (excluding fractions; not included in constraints)

  let left = 0; // initialize left pointer
  let numArrays = 0; // start answer count at 0
  let currProduct = 1; // running value to mult/div and check against k

  for (let right = 0; right < nums.length; right++) {
    currProduct *= nums[right];

    // set a statement when condition is broken; need to remove on left
    while (currProduct >= k) {
      currProduct /= nums[left];
      left++; // increment left
    }

    // num of subarrays that end at the curr idx: r - l + 1
    numArrays += right - left + 1;
  }

  return numArrays;
};
