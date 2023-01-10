/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (guess(mid) === 0) {
      return mid;
    }

    if (guess(mid) == 1) {
      // return 1 -> lower
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return mid;
};

// other code

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let count = n;
  let min = 1,
    max = n;
  while (min < max) {
    let mid = Math.round((min + max) / 2);
    switch (guess(mid)) {
      case -1:
        max = mid - 1;
        break;
      default:
      case 0:
        return mid;
      case 1:
        min = mid + 1;
        break;
    }
  }
  return min;
};
