/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// my code
var floodFill = function (image, sr, sc, color) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const m = image.length;
  const n = image[0].length;
  const visited = [];
  const baseColor = image[sr][sc];

  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  image[sr][sc] = color;

  const dfs = function (r, c) {
    if (r >= m && c >= n) {
      return;
    }

    for (let d = 0; d < 4; d++) {
      const nr = r + dr[d];
      const nc = c + dc[d];

      if (
        nr < 0 ||
        nc < 0 ||
        nr >= m ||
        nc >= n ||
        image[nr][nc] !== baseColor
      ) {
        continue;
      }

      if (visited[nr][nc]) {
        continue;
      }

      visited[nr][nc] = true;
      image[nr][nc] = color;

      dfs(nr, nc);
    }
  }; // end dfs function

  dfs(sr, sc);

  return image;
};

// other code
var floodFill = function (image, sr, sc, color) {
  const currColor = image[sr][sc];
  if (currColor === color) return image;

  function fill(image, sr, sc) {
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[sr].length ||
      image[sr][sc] !== currColor
    )
      return image;
    image[sr][sc] = color;
    fill(image, sr + 1, sc);
    fill(image, sr - 1, sc);
    fill(image, sr, sc + 1);
    fill(image, sr, sc - 1);
    return image;
  }
  return fill(image, sr, sc);
};
