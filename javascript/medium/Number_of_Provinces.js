/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// my code - using dfs
var findCircleNum = function (isConnected) {
  let province = 0;
  const n = isConnected.length;
  let visited = new Array(n).fill(false);

  if (n === 1) return 1;

  var dfs = (start) => {
    for (let i = 0; i < n; i++) {
      if (isConnected[start][i] == 1 && !visited[i]) {
        visited[i] = true;
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      province += 1;
    }
  }

  return province;
};

// other code - using bfs
var findCircleNum = function (M) {
  const seen = new Set();
  let res = 0;
  let stack = [];
  for (let i = 0; i < M.length; i++) {
    if (!seen.has(i)) {
      stack.push(i);
      while (stack.length) {
        const curr = stack.pop();
        seen.add(curr);
        for (let j = 0; j < M[0].length; j++) {
          if (M[curr][j] === 1 && !seen.has(j)) {
            stack.push(j);
          }
        }
      }
      res++;
    }
  }
  return res;
};

// other code - using Union Find
var findCircleNum = function (M) {
  let res = 0;
  const dsu = new DSU(M.length);
  for (let row = 0; row < M.length; row++) {
    for (let col = 0; col < M[0].length; col++) {
      if (M[row][col] === 1) {
        dsu.union(row, col);
      }
    }
  }
  return new Set(M.map((m, i) => dsu.find(i))).size;
};

class DSU {
  constructor(N) {
    this.parent = [...new Array(N).keys()];
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    this.parent[this.find(x)] = this.find(y);
  }
}
