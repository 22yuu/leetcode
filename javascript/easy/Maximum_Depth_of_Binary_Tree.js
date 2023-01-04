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

// my code
var maxDepth = function (root) {
  if (!root) return 0;

  const que = [root];
  const levels = [];

  while (que.length !== 0) {
    const queLength = que.length;
    const currentLevels = [];

    for (let i = 0; i < queLength; i++) {
      const current = que.shift();

      if (current.left) {
        que.push(current.left);
      }

      if (current.right) {
        que.push(current.right);
      }

      currentLevels.push(current.val);
    }

    levels.push(currentLevels);
  }

  return levels.length;
};

// other code
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
// var maxDepth = function (root) {
//   if (!root) return 0;
//   let maxLength = 1;
//   const findNext = (node, acc) => {
//     if (node.left) findNext(node.left, acc + 1);
//     if (node.right) findNext(node.right, acc + 1);
//     maxLength = Math.max(acc, maxLength);
//   };
//   findNext(root, 1);
//   return maxLength;
// };
