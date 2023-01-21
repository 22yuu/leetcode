// 231. Power of Two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true;

  if (n % 2 !== 0 || n <= 0) return false;

  // let bNumber = '';
  let count = 0;

  while (n > 0) {
    if (n % 2 == 1) count += 1;

    // bNumber += '' + (n % 2);
    n = Math.floor(n / 2);

    if (count >= 2) return false;
  }

  return true;
};

// other code

var isPowerOfTwo = function (n) {
  while (n > 1) {
    n /= 2;
  }
  return n === 1 ? true : false;
};
