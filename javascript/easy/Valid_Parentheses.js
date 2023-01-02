/**
 * @param {string} s
 * @return {boolean}
 */

// my code
var isValid = function (s) {
  const myStack = [];

  const splittedArray = s.split("");

  if (s.length === 1) {
    return false;
  }

  if (
    splittedArray[0] === ")" ||
    splittedArray[0] === "}" ||
    splittedArray[0] === "]"
  ) {
    return false;
  }

  myStack.push(splittedArray[0]);

  let current = "";

  for (let i = 1; i < splittedArray.length; i++) {
    current = myStack[myStack.length - 1];

    switch (current) {
      case "{":
        if (splittedArray[i] === "}") {
          myStack.pop();
        } else {
          myStack.push(splittedArray[i]);
        }
        break;

      case "(":
        if (splittedArray[i] === ")") {
          myStack.pop();
        } else {
          myStack.push(splittedArray[i]);
        }
        break;
      case "[":
        if (splittedArray[i] === "]") {
          myStack.pop();
        } else {
          myStack.push(splittedArray[i]);
        }
        break;
      default:
        myStack.push(splittedArray[i]);
        break;
    }
  }

  return myStack.length === 0;
};

// other solution
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   const left = [];
//   const legend = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       left.push(s[i]);
//     } else if (legend[left.pop()] !== s[i]) {
//       return false;
//     }
//   }
//   return left.length ? 0 : 1;
// };
