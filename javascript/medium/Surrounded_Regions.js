/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 둘러쌓였다는 판단을 어떻게해야할까

// var solve = function(board) {
//     const direction = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1],
//     ];

//     const n = board.length;;
//     const m = board[0].length;

//     let visited = new Array(n);

//     for(let i = 0; i < n; i++) visited[i] = new Array(m).fill(false);

//     const dfs = (r, c) => {

//         visited[r][c] = true;

//         for(let d of direction)
//         {
//             let nr = r + d[0];
//             let nc = c + d[1];

//             if(nr < 0 || nc < 0 || nr >= n || nc >= m || board[nr][nc] == 'X') return;

//             if(visited[nr][nc]) return;

//             // visited[nr][nc] = true;
//             dfs(nr, nc);

//             // console.log(`${nr}, ${nc}`);
//         } // end for
//     }

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < m; j++) {
//             if(board[i][j] == 'O' && (i === 0 || j === 0 || i === n-1 || j === m-1)) {
//                 console.log(`${i}, ${j}`);
//                 // visited[i][j] = true;
//                 dfs(i,j);
//             }
//         }
//     }

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < m; j++) {
//             if(visited[i][j]) {
//                 board[i][j] = 'O';
//             } else {
//                 board[i][j] = 'X';
//             }
//         }
//     }

//     return board;
// };

var solve = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        board[i][j] === "O" &&
        (i === 0 ||
          j === 0 ||
          i === board.length - 1 ||
          j === board[0].length - 1)
      )
        dfs(i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "Visited") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  function dfs(i, j) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j] === "Visited" ||
      board[i][j] === "X"
    )
      return;

    board[i][j] = "Visited";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);

    return;
  }
};
