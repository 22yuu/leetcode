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
 * @return {boolean}
 */

// my code
var isSymmetric = function (root) {
  if (!root) return false;

  return isSame(root.left, root.right);
};

var isSame = function (leftNode, rightNode) {
  if (
    (!leftNode && rightNode) ||
    (leftNode && !rightNode) ||
    (leftNode && rightNode && leftNode.val !== rightNode.val)
  ) {
    return false;
  }

  if (leftNode && rightNode) {
    return (
      isSame(leftNode.right, rightNode.left) &&
      isSame(leftNode.right, rightNode.left)
    );
  }

  return true;
};

// other code
var isSymmetric = function (root) {
  function compare(n1, n2) {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;

    if (n1.val === n2.val) {
      return compare(n1.left, n2.right) && compare(n1.right, n2.left);
    } else {
      return false;
    }
  }

  return compare(root.left, root.right);
};
