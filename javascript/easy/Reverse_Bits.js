/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let binaryArray = new Array(33).fill(0);
  let index = 1;

  while (n > 0) {
    binaryArray[index++] = n % 2;
    n = Math.floor(n / 2);
  }

  let answer = 0;

  let sq = Math.pow(2, 31);

  for (let i = 1; i <= 32; i++) {
    answer += binaryArray[i] * sq;
    sq = Math.floor(sq / 2);
  }

  return answer;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let str = '';

  while (n > 0) {
    str += n % 2;
    n = Math.floor(n / 2);
  }

  if (str.length < 32) {
    str = str + '0'.repeat(32 - str.length);
  }

  const answer = parseInt(str, 2);

  return answer;
};

// other code

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let binaryNum = (n >>> 0).toString(2);
  let reversedBinary = binaryNum.split('').reverse('').join('');
  if (reversedBinary.length < 32) {
    reversedBinary = reversedBinary + '0'.repeat(32 - reversedBinary.length);
  }
  let reversedNum = parseInt(String(reversedBinary), 2);
  return reversedNum;
};
