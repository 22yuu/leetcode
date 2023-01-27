/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sArray = s.split('');
  let tArray = t.split('');

  for (let i = 0; i < sArray.length; i++) {
    if (i > 0 && sArray[i] === '#') {
      sArray[i] = '';
      sArray[i - 1] = '';
      sArray = sArray.join('').split('');
      i = -1;
    } else if (i === 0 && sArray[i] === '#') {
      console.log('??');
      sArray[i] = '';
    }
  }

  for (let i = 0; i < tArray.length; i++) {
    if (i > 0 && tArray[i] === '#') {
      tArray[i] = '';
      tArray[i - 1] = '';
      tArray = tArray.join('').split('');
      i = -1;
    } else if (i === 0 && tArray[i] === '#') {
      tArray[i] = '';
    }
  }

  const newS = sArray.join('');
  const newT = tArray.join('');

  return newS === newT;
};

// other code
let backspaceCompare = function (s, t) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '#') {
      arr1.push(s[i]);
    } else {
      arr1.pop();
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] != '#') {
      arr2.push(t[i]);
    } else {
      arr2.pop();
    }
  }
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  return false;
};
