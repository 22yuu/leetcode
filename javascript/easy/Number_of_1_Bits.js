// 191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n > 0) {
    if (n % 2 == 1) {
      count += 1;
    }

    n = Math.floor(n / 2);
  }

  return count;
};

// other code

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var count = 0;
  for (var i = 0; i <= 31; i++) {
    if (((n >> i) & 1) === 1) {
      count++;
    }
  }
  return count;
};
