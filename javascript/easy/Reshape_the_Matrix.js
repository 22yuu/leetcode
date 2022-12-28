/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// my code
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    let answerArray = [];
  
    let row = 0;
    let col = 0;
  
    if(m === r && n === c) {
        return mat;
    }
  
    if(m*n !== r*c) {
        return mat;
    }
  
    let tempArray = [];
  
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(row === r && col === c) return answerArray;
            
            tempArray.push(mat[i][j]);
            col++;      
            if(col === c) {
                row++;
                col = 0;
                answerArray.push(tempArray);
                tempArray = [];
            }
  
            
            
        }
    }
  
    return answerArray;
  };

  // other code
/**
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) {
        return mat;
    }
    let spread = [];
    for (let i = 0; i < mat.length; i++) {
        spread.push(...mat[i]);
    }
    let returnArr = [];
    while (spread.length > 0) {
        returnArr.push(spread.splice(0, c));
    }
    return returnArr;
};
*/