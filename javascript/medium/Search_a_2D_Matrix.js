/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (target === matrix[row][col]) return true;

    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};
