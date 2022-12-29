/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let array = [];

  // 0 1 2 / 3 4 5 / 6 7 8

  // check row
  for (let i = 0; i < board.length; i++) {
    array = new Array(10).fill(0);

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") continue;

      if (array[Number(board[i][j])] === 0) {
        array[Number(board[i][j])]++;
      } else {
        return false;
      }
    }
  }

  // check column
  for (let i = 0; i < board.length; i++) {
    array = new Array(10).fill(0);

    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] === ".") continue;

      if (array[Number(board[j][i])] === 0) array[Number(board[j][i])]++;
      else {
        return false;
      }
    }
  }

  // check field
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!checkField(i, j, board)) return false;
    }
  }

  return true;
};

var checkField = function (r, c, board) {
  let array = new Array(10).fill(0);

  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      if (board[i][j] === ".") continue;

      if (array[Number(board[i][j])] === 0) {
        array[Number(board[i][j])]++;
      } else {
        return false;
      }
    }
  }

  return true;
};
