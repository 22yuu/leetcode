/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// using bfs
var connect = function (root) {
  if (!root) return null;
  const q = [root];
  while (q.length) {
    const current = q.shift();
    if (current.left && current.right) {
      current.left.next = current.right;
      if (current.next) {
        current.right.next = current.next.left;
      }
      q.push(current.left);
      q.push(current.right);
    }
  }
  return root;
};

// using dfs
var connect = function (root) {
  if (!root || !root.left) return root;

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);

  return root;
};
