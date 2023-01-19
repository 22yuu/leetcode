/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let n = S.length;
  let res = [];
  let char = /[a-zA-Z]/;
  let arr = [];

  function backtrack(i) {
    if (i == n) {
      res.push(arr.join(''));
      return;
    }

    if (char.test(S[i])) {
      arr[i] = S[i].toLowerCase();
      backtrack(i + 1);
      arr[i] = S[i].toUpperCase();
      backtrack(i + 1);
    } else {
      arr[i] = S[i];
      backtrack(i + 1);
    }
  }

  backtrack(0);
  return res;
};
