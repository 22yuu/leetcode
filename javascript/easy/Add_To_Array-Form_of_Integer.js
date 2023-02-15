/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let number = '';

  for (let i = 0; i < num.length; i++) {
    number += num[i];
  }

  number = BigInt(number) + BigInt(k);

  const answer = number
    .toString()
    .split('')
    .map((num) => parseInt(num));

  return answer;
};
