/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function (ransomNote, magazine) {
  const magazineList = magazine.split("");
  const ransomNoteList = ransomNote.split("");

  const magazineDict = magazineList.reduce(
    (prev, current) => ({
      ...prev,
      [current]: (prev[current] || 0) + 1,
    }),
    {}
  );

  for (let i = 0; i < ransomNoteList.length; i++) {
    const v = ransomNoteList[i];

    if (magazineDict[v] && magazineDict[v] > 0) {
      magazineDict[v] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("a", "b"));
