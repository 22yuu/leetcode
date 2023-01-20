// 491. Non-decreasing Subsequences
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let map = {};
  let iterate = (index, temp) => {
    if (map[temp]) return;
    if (temp.length >= 2) {
      res.push(temp);
    }
    for (let i = index; i < nums.length; i++) {
      if (temp[temp.length - 1] > nums[i]) continue;
      map[temp] = true;
      iterate(i + 1, [...temp, nums[i]]);
    }
  };
  iterate(0, []);
  return res;
};

// other code

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (n) {
  if (n.length < 2) return [];
  let result = [];
  let path = [];

  var backtrack = function (startIndex) {
    if (path.length >= 2) {
      result.push([...path]);
    }
    var used = new Set(); // Important, we need to check whether the num has been used on this level to avoid duplicate
    for (var i = startIndex; i < n.length; i++) {
      if ((path.length > 0 && n[i] < path[path.length - 1]) || used.has(n[i]))
        continue;
      used.add(n[i]);
      path.push(n[i]);
      backtrack(i + 1);
      path.pop();
    }
    return;
  };
  backtrack(0);
  return result;
};
