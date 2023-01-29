/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Number.MAX_VALUE;

  while (left <= right) {
    let container;

    if (height[left] <= height[right]) {
      container = (right - left) * height[left];
      left += 1;
    } else {
      container = (right - left) * height[right];
      right -= 1;
    }

    // console.log(`${(right - left)} x ${height[right]}`)
    max = Math.max(container, max);
  }

  return max;
};
