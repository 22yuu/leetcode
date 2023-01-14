/**
 * @param {string} s
 * @return {number}
 */
// my code
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let array = [s[i]];
    let index = i + 1;

    while (index < s.length) {
      if (array.indexOf(s[index]) !== -1) {
        break;
      }

      array.push(s[index]);
      index++;
    } // end while;

    max = Math.max(max, array.length);
  }

  return max;
};

// other code

var lengthOfLongestSubstring = function (s) {
  const uniqueChars = new Set();
  let left = 0;
  let right = left;
  let maxLength = 0;

  while (right < s.length) {
    while (uniqueChars.has(s.charAt(right))) {
      uniqueChars.delete(s.charAt(left));
      left++;
    }

    uniqueChars.add(s.charAt(right));
    maxLength = Math.max(maxLength, uniqueChars.size);
    right++;
  }

  return maxLength;
};
