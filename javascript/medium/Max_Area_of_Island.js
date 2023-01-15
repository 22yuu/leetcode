/**
 * @param {number[][]} grid
 * @return {number}
 */

// my code
var maxAreaOfIsland = function (grid) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const m = grid.length;
  const n = grid[0].length;
  const visited = [];
  let max = 0;
  let currentValue = 0;

  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dfs = function (r, c) {
    if (r >= m && c >= n) {
      return;
    }

    for (let d = 0; d < 4; d++) {
      const nr = r + dr[d];
      const nc = c + dc[d];

      if (nr < 0 || nc < 0 || nr >= m || nc >= n || grid[nr][nc] === 0) {
        continue;
      }

      if (visited[nr][nc]) {
        continue;
      }

      visited[nr][nc] = true;

      if (grid[nr][nc] === 1) {
        dfs(nr, nc);
        currentValue += 1;
        // console.log(`in dfs: ${currentValue}`);
      }
    }
    return;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        currentValue = 1;
        visited[i][j] = true;
        dfs(i, j);
        max = Math.max(max, currentValue);
      }
    }
  }

  return max;
};

// other code

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      maxArea = Math.max(maxArea, getArea(grid, r, c));
    }
  }

  return maxArea;
};

function getArea(grid, r, c) {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] === 0
  )
    return 0;

  let area = 0;
  grid[r][c] = 0;
  area +=
    1 +
    getArea(grid, r + 1, c) +
    getArea(grid, r - 1, c) +
    getArea(grid, r, c + 1) +
    getArea(grid, r, c - 1);

  return area;
}
