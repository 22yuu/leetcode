/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answerArray = [];

  for (let i = 1; i <= numRows; i++) {
    let tempArray = [];

    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        tempArray.push(1);
        continue;
      }

      tempArray.push(answerArray[i - 2][j - 2] + answerArray[i - 2][j - 1]);
    }

    answerArray.push(tempArray);
  }

  return answerArray;
};
