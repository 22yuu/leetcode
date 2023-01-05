/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// my code R: 85%, M: 99%
let isHas;

var hasPathSum = function (root, targetSum) {
  if (root == null) return 0;

  isHas = false;
  dfs(root, 0, targetSum);

  return isHas;
};

var dfs = function (node, sum, targetSum) {
  if (node === null) {
    return;
  } else if (node.left === null && node.right === null) {
    sum = sum + node.val;

    if (sum === targetSum) {
      isHas = true;
    }

    return;
  }

  dfs(node.left, sum + node.val, targetSum);
  dfs(node.right, sum + node.val, targetSum);

  return;
};

// other code R: 99%

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right && root.val == targetSum) {
    return true;
  }

  let l = false;
  let r = false;

  if (root.left) {
    l = hasPathSum(root.left, targetSum - root.val);
    if (l) {
      return true;
    }
  }

  if (root.right) {
    r = hasPathSum(root.right, targetSum - root.val);
    if (r) {
      return true;
    }
  }

  return false;
};
