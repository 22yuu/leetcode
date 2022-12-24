/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  return nums.map((v, i) =>
    nums.slice(0, i + 1).reduce((prev, current) => prev + current, 0)
  );
};

console.log(runningSum([1, 2, 3, 4]));
