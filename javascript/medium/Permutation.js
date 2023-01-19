/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const answer = [];
  let sel = Array(nums.length).fill(0);
  const visited = Array(nums.length).fill(false);

  var permutation = function (depth) {
    if (depth === nums.length) {
      answer.push([...sel]);

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        sel[depth] = nums[i];
        permutation(depth + 1);
        visited[i] = false;
      }
    }
  };

  permutation(0);

  return answer;
};

// other code

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function dfs(nums, path, allPaths, start, used) {
  if (start === nums.length) {
    allPaths.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue;
    }
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, allPaths, start + 1, used);
    used[i] = false;
    path.pop();
  }
}

var permute = function (nums) {
  const path = [];
  const allPaths = [];
  const used = new Array(nums.length).fill(false);
  dfs(nums, path, allPaths, 0, used);
  return allPaths;
};
