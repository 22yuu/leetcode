/**
 * @param {number[]} nums
 * @return {number[]}
 */

// my code
var sortedSquares = function (nums) {
  const squares = nums.map((item) => item * item);

  squares.sort((a, b) => a - b);

  return squares;
};

// other code

var sortedSquares = function (nums) {
  return nums.map((x) => x * x).sort((a, b) => (a > b ? 1 : -1));
};
