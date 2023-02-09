/**
 * @param {character[][]} grid
 * @return {number}
 */
// my code - using dfs
var numIslands = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  let visited = [];
  let answer = 0;

  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(false);
  }

  var findIslands = (r, c) => {
    for (let d = 0; d < 4; d++) {
      let nr = r + dr[d];
      let nc = c + dc[d];

      if (nr < 0 || nc < 0 || nr >= n || nc >= m || grid[nr][nc] == '0') {
        continue;
      }

      if (visited[nr][nc]) continue;

      visited[nr][nc] = true;
      findIslands(nr, nc);
    }
  }; // end func

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == '1' && !visited[i][j]) {
        findIslands(i, j);
        answer += 1;
      }
    }
  }

  return answer;
};

// other code - using BFS

var numIslands = function (grid) {
  let count = 0;
  if (grid.length === 0) {
    return count;
  }

  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        count++;
        queue.push([row, col]);
        grid[row][col] = '0';

        while (queue.length) {
          let current = queue.shift();
          const curRow = current[0];
          const curCol = current[1];

          for (let i = 0; i < direction.length; i++) {
            const currentDir = direction[i];
            const nextRow = curRow + currentDir[0];
            const nextCol = curCol + currentDir[1];

            if (
              nextRow < 0 ||
              nextCol < 0 ||
              nextRow > grid.length - 1 ||
              nextCol > grid[0].length - 1
            )
              continue;

            if (grid[nextRow][nextCol] === '1') {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = '0';
            }
          }
        }
      }
    }
  }
  return count;
};
