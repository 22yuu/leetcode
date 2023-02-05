/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;

  if (grid[0][0] == 1) return -1;

  const dr = [-1, 1, 0, 0, 1, -1, -1, 1];
  const dc = [0, 0, -1, 1, 1, -1, 1, -1];

  let que = [[0, 0, 1]];

  while (que.length) {
    const [r, c, v] = que.shift();

    if (r == n - 1 && c == n - 1) {
      console.log(v);
      return v;
    }

    for (let d = 0; d < 8; d++) {
      let nr = r + dr[d];
      let nc = c + dc[d];

      if (nr < 0 || nc < 0 || nr >= n || nc >= n) {
        continue;
      }

      if (grid[nr][nc] == 0) {
        que.push([nr, nc, v + 1]);
        grid[nr][nc] = 1;
      }
    }
  }

  return -1;
};

/**
 * BFS
 * *Time: O(N)
 * *Space: O(N)
 */
// Runtime: 108 ms, faster than 86.30% of JavaScript online submissions for Shortest Path in Binary Matrix.
// Memory Usage: 45.5 MB, less than 96.71% of JavaScript online submissions for Shortest Path in Binary Matrix.
// const shortestPathBinaryMatrix = grid => {
// 	const directions = [
// 		[1, 0],
// 		[-1, 0],
// 		[0, 1],
// 		[0, -1],
// 		[1, 1],
// 		[1, -1],
// 		[-1, 1],
// 		[-1, -1],
// 	];

// 	if (grid[0][0] === 1) return -1;

// 	const N = grid.length;
// 	const queue = [[0, 0, 1]]; // [row, col, path]

// 	while (queue.length) {
// 		const [row, col, path] = queue.shift();

// 		if (row === N - 1 && col === N - 1) return path; // reached destination

// 		for (const [dx, dy] of directions) { // traverse adjacents
// 			let x = row + dx;
// 			let y = col + dy;

// 			// if invalid, continue
// 			if (x < 0 || x >= N) continue;
// 			if (y < 0 || y >= N) continue;
// 			if (grid[x][y] !== 0) continue;

// 			queue.push([x, y, path + 1]); // add new path to queue
// 			grid[x][y] = 1; // mark visited
// 		}
// 	}

// 	return -1;
// };
