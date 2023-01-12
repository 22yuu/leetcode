/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const reverse = function (word) {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
      const temp = word[left];
      word[left] = word[right];
      word[right] = temp;

      left++;
      right--;
    }

    return word.join('');
  };

  const splited = s.split(' ');
  const reverseString = splited.map((w) => reverse(w.split('')));

  return reverseString.join(' ');
};
