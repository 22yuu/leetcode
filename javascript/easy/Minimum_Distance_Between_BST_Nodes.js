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
 * @return {number}
 */
var minDiffInBST = function (root) {
  var inorder = function (root, val) {
    if (root.left) {
      inorder(root.left, val);
    }
    val.push(root.val);
    if (root.right) {
      inorder(root.right, val);
    }
  };

  var val = [];
  inorder(root, val);
  let min = Number.MAX_VALUE;
  for (let i = 1; i < val.length; i++) {
    min = Math.min(val[i] - val[i - 1], min);
  }
  return min;
};
