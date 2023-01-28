/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let fIndex = 0,
    sIndex = 0;
  let res = [];

  while (fIndex < firstList.length && sIndex < secondList.length) {
    const maxStart = Math.max(firstList[fIndex][0], secondList[sIndex][0]);
    const minEnd = Math.min(firstList[fIndex][1], secondList[sIndex][1]);

    if (maxStart <= minEnd) {
      res.push([maxStart, minEnd]);
    }

    if (firstList[fIndex][1] < secondList[sIndex][1]) {
      fIndex += 1;
    } else {
      sIndex += 1;
    }
  }

  return res;
};

// other code
