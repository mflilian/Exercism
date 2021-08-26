//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (param) => {
  // mando a string em lowercase para a função cleanStringToArray
  let stringArray = cleanStringToArray(param.toLowerCase());

  // declaro uma variavel pro objeto final
  let counts = {};

  stringArray.forEach(function(i) { 
    // removo citação abrangente
    i = i.replace(/(^')|('$)/g, '');
    // crio objeto final w word count
    counts[i] = (counts[i] || 0)+1; 
  });

  return counts;
};

const cleanStringToArray = (str) => {
  // adiciono espaço depois das virgulas
  let spaceCommas = str.replace(/,/g, ', ');
  // removo a pontuação
  let punctuationless = spaceCommas.replace(/[.,"@\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  // removo os espaços
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  // retorna um array com as strings
  return finalString.trim().split(" ");
};