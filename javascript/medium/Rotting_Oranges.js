/**
 * @param {number[][]} grid
 * @return {number}
 */

// my code
var orangesRotting = function (grid) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const m = grid.length;
  const n = grid[0].length;
  let minutes = 0;

  const bfs = function (que) {
    let min = 0;
    console.log(que);

    while (que.length) {
      let current = que.shift();

      for (let d = 0; d < 4; d++) {
        const nr = current[0] + dr[d];
        const nc = current[1] + dc[d];

        if (nr < 0 || nc < 0 || nr >= m || nc >= n || grid[nr][nc] == 0) {
          continue;
        }

        if (grid[nr][nc] == 2) {
          continue;
        }

        que.push([nr, nc, current[2] + 1]);
        grid[nr][nc] = 2;
      }

      min = current[2];
    }

    return min;
  }; // end bfs;

  let que = [];
  loop: for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        que.push([i, j, 0]);
      }
    }
  } // end loop;

  minutes = bfs(que);

  // search fresh orange
  for (let i = 0; i < m; i++) {
    if (grid[i].indexOf(1) !== -1) {
      return -1;
    }
  } // end search fresh orange;

  return minutes;
};

// other code
/**
 * @param {number[][]} grid
 * @return {number}
 */
//neighbers will be 1/2
//bfs,if neighbers and has neighbers === 1  increase count
//save visited MAP with col-row value
//after bfs, iterate grid, if grid === 1 and not in visited - return -1
let directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
var orangesRotting = function (grid) {
  return bfs(grid);
};
function bfs(grid) {
  let queue = [];
  let fresh = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }
  let count = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      let item = queue.shift();
      if (grid[item[0]][item[1]] !== 2) {
        continue;
      }
      for (let i = 0; i < directions.length; i++) {
        let newRow = item[0] + directions[i][0];
        let newCol = item[1] + directions[i][1];
        if (
          newCol >= 0 &&
          newRow >= 0 &&
          newRow < grid.length &&
          newCol < grid[0].length &&
          grid[newRow][newCol] == 1
        ) {
          hasFresh = true;
          let arr = [];
          arr[0] = newRow;
          arr[1] = newCol;
          queue.push(arr);
          grid[newRow][newCol] = 2;
          fresh--;
        }
      }
    }
    if (queue.length > 0) count++;
  }
  if (fresh) {
    return -1;
  }
  return count;
}
