/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const counts = new Array(n + 1).fill(0);

  for (let [i, j] of trust) {
    counts[i] -= 1;
    counts[j] += 1;
  }

  for (let i = 1; i < counts.length; i++) {
    if (n - 1 === counts[i]) {
      return i;
    }
  }

  return -1;
};
