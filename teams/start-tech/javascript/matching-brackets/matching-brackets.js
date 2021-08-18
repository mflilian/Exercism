//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  if (input === '') {
    return true;
  }
  const regex = /[\[|\]|\{|\}|\(|\)]/g;
  const arr = input.match(regex);
  if (arr.length % 2 === 1) {
    return false;
  }
  const openingBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const closingBrackets = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const pass = [];
  let comeBack = false;

  for (let i = 0; i < arr.length; i++) {
    if (comeBack === true) {
      i--;
      comeBack = false;
    }
    let newScope = i;
    let beginningScope = arr[i];
    let k;
    if (pass.length > 0) {
      let keepGoing = false;
      for (let j = 0; j < pass.length; j++) {
        if (pass[j] === i) {
          keepGoing = true; 
          break;
        }
      }
      if (keepGoing === true) {continue;}
    }
    if (closingBrackets.hasOwnProperty(beginningScope)) {return false;}
    if (pass.length > 0) {
      k = pass[pass.length - 1] + 1;
    } else {
      k = i + 1;
    }
    while (k < arr.length) {
      if (closingBrackets.hasOwnProperty(arr[k]) && openingBrackets[beginningScope] === arr[k]) {
        pass.push(newScope);
        pass.push(k);
        break;
      } else if (closingBrackets.hasOwnProperty(arr[k]) && openingBrackets[beginningScope] !== arr[k]) {
        return false;
      } else if (k === arr.length - 1) {
        return false;
      } else {
        beginningScope = arr[k];
        newScope = k;
        comeBack = true;
        k++;
      }
    }
  }
  return true;
};
