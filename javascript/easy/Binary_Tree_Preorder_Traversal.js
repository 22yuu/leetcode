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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  let stack = [root];
  let result = [];

  while (stack.length) {
    let curr = stack.pop();

    if (curr) {
      result.push(curr.val);
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
  }

  return result;
};
