/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let ones = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "0") {
      res = Math.min(res + 1, ones);
    } else {
      ones++;
    }
  }

  return res;
};
