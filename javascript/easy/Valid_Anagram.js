/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// my code
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const s_array = s.split("").sort();
  const t_array = t.split("").sort();

  for (let i = 0; i < s_array.length; i++) {
    if (s_array[i] !== t_array[i]) return false;
  }

  return true;
};

// other solution
// var isAnagram = function(s, t) {
//     let sCounter = new Array(26).fill(0);
//     let tCounter = new Array(26).fill(0);

//     if (s.length !== t.length) {
//         return false;
//     }

//     for (let i = 0; i < s.length; i++) {
//         sCounter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//         tCounter[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }

//     return sCounter.join(',') === tCounter.join(',');
// };
