/**
 * @param {character[][]} grid
 * @return {number}
 */
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
