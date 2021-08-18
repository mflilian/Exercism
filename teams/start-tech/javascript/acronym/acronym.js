//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (word) => {
  let fixedWord = word.replace('-', ' ')
    .replace('_', ' ')
    .split(" ")
    .filter(w => w != '');
  return fixedWord.reduce((acronym, word) => acronym + word[0], '').toUpperCase();
};
