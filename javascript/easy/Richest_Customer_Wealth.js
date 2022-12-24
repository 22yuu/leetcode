// my code
/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let max = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;

    for (let j = 0; j < accounts[0].length; j++) {
      sum += accounts[i][j];
    }

    if (sum > max) max = sum;
  }

  return max;
};

/**
 * best runtime
 var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(acc => {
        return acc.reduce((prev, cur) => prev + cur, 0)
    }))
};
 */

/** best memory
var maximumWealth = function(accounts) {
    let sum = 0;
    let maxSum = 0;
    for(var i = 0;i<accounts.length;i++){
        let sum = accounts[i].reduce((a,b) => a + b);
        if(sum > maxSum){
            maxSum = sum}
    }
    return maxSum;
}
 */
