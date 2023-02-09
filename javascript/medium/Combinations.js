/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const answer = [];
  let sel = Array(k).fill(0);
  const visited = Array(n).fill(false);

  var comb = function (start, depth) {
    if (depth === k) {
      answer.push([...sel]);

      return;
    }

    for (let i = start; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        sel[depth] = i;
        comb(i + 1, depth + 1);
        visited[i] = false;
      }
    }
  };

  comb(1, 0);

  return answer;
};
