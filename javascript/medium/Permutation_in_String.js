/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// my first code
var checkInclusion = function (s1, s2) {
  let sel = [];

  var permutation = function (array, n, depth) {
    if (n === depth) {
      sel.push(array.join(''));
      // console.log(sel);
      return;
    }

    for (let i = depth; i < n; i++) {
      swap(array, i, depth);
      permutation(array, n, depth + 1);
      swap(array, depth, i);
    }
  };

  var swap = function (s, i, j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  };

  let splitted = s1.split('');
  permutation(splitted, s1.length, 0);

  console.log(sel);

  for (let i = 0; i < sel.length; i++) {
    if (s2.includes(sel[i])) return true;
  }

  return false;
};

// my second code
var checkInclusion = function (s1, s2) {
  let flag = false;

  var permutation = function (array, n, depth, s2) {
    if (flag) return;

    if (n === depth) {
      const str = array.join('');

      if (s2.includes(str)) {
        flag = true;
      }

      return;
    }

    for (let i = depth; i < n; i++) {
      swap(array, i, depth);
      permutation(array, n, depth + 1, s2);
      swap(array, depth, i);
    }
  };

  var swap = function (s, i, j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  };

  let splitted = s1.split('');

  permutation(splitted, s1.length, 0, s2);

  return flag;
};

const s1 = 'prosperity';
const s2 = 'properties';

checkInclusion(s1, s2);

// 순열로 모든 경우의 수를 구했던 두 코드 모두 타임 아웃 or 힙 메모리 부족...

// othenr code
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len1 = s1.length,
    len2 = s2.length;
  if (len1 > len2) return false;

  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }

  if (count.every((e) => e === 0)) return true;

  for (let i = len1; i < len2; i++) {
    count[s2.charCodeAt(i) - 97]--;
    count[s2.charCodeAt(i - len1) - 97]++;

    console.log(count);
    if (count.every((e) => e === 0)) return true;
  }

  return false;
};

var checkInclusion = function (s1, s2) {
  // If s1 is longer than s2, it is not possible for s1 to be found within s2
  if (s1.length > s2.length) {
    return false;
  }

  const s1CharacterMap = Array.from({ length: 26 }, () => 0);
  const s2CharacterMap = Array.from({ length: 26 }, () => 0);

  // Populate s1 and s2 character maps for initial window length
  for (let i = 0; i < s1.length; i++) {
    const s1Character = s1.charCodeAt(i) - 97;
    s1CharacterMap[s1Character] = (s1CharacterMap[s1Character] || 0) + 1;

    const s2Character = s2.charCodeAt(i) - 97;
    s2CharacterMap[s2Character] = (s2CharacterMap[s2Character] || 0) + 1;
  }

  // This keeps track of how many matches we have in both hashmaps
  let characterMatches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1CharacterMap[i] == s2CharacterMap[i]) {
      characterMatches++;
    }
  }

  let leftPointer = 0;
  let rightPointer = s1.length;

  while (rightPointer < s2.length) {
    if (characterMatches == 26) {
      return true;
    }

    const rightCharacter = s2.charCodeAt(rightPointer) - 97;
    s2CharacterMap[rightCharacter]++;
    if (s1CharacterMap[rightCharacter] == s2CharacterMap[rightCharacter]) {
      characterMatches++;
    } else if (
      s1CharacterMap[rightCharacter] + 1 ==
      s2CharacterMap[rightCharacter]
    ) {
      characterMatches--;
    }

    const leftCharacter = s2.charCodeAt(leftPointer) - 97;
    s2CharacterMap[leftCharacter]--;
    if (s1CharacterMap[leftCharacter] == s2CharacterMap[leftCharacter]) {
      characterMatches++;
    } else if (
      s1CharacterMap[leftCharacter] - 1 ==
      s2CharacterMap[leftCharacter]
    ) {
      characterMatches--;
    }

    leftPointer++;
    rightPointer++;
  }

  return characterMatches == 26;
};
