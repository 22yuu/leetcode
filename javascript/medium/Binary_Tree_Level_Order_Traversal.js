var levelOrder = function (root) {
  if (!root) return [];

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

  return levels;
};
