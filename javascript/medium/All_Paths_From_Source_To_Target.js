/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// my code
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;

  let res = [];

  const dfs = (node, path) => {
    path.push(node);

    if (node == target) {
      res.push(path);
      return;
    }

    for (let value of graph[node]) {
      dfs(value, [...path]);
    }
  };

  dfs(0, []);

  return res;
};

// fastest run time code
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length - 1;
  const result = [];

  dfs(graph, 0, n, result, [0]);

  return result;
};

const dfs = (graph, i, n, result, currentPath) => {
  if (i === n) {
    result.push(currentPath.slice());
  }

  for (let neighbour of graph[i]) {
    currentPath.push(neighbour);
    dfs(graph, neighbour, n, result, currentPath);
    currentPath.pop();
  }
};
