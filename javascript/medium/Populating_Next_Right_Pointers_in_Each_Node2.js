var connect = function (root) {
  if (!root) return root;
  let queue = [root];

  while (queue.length) {
    let current_level_length = queue.length;
    let next_level_nodes = [];

    for (let i = 0; i < current_level_length; i++) {
      let node = queue.shift();
      node.next = queue[0] || null;

      if (node.left) next_level_nodes.push(node.left);
      if (node.right) next_level_nodes.push(node.right);
    }
    queue = next_level_nodes;
  }
  return root;
};
