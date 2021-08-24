export const translate = (RNA = '') => {
  // Tradução
  let translation = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  // Usei regex para dividir cada terceira letra
  if (RNA !== '') {
    let rnaArr = RNA.match(/.{1,3}/g);
    let transArr = []; // Vai guardar a proteina traduzida

    // Usei .every para interromper ao atingir um códon determinado 
    //(.every testa se todos os elementos do array passam pelo teste implementado pela função fornecida)
    rnaArr.every((rna) => {
      if (translation[rna] === 'STOP') {
        return false;
      } else if (translation[rna] === undefined) {
        // Tras o erro se o codon n eh um RNA valido 
        throw new Error('Invalid codon');
      } else {
        transArr.push(translation[rna]);
        return true;
      }
    });

    // Retorna a lista de proteinas traduzidas
    return transArr;
  } else {
    // Se nao tiver RNA listado entao nao tem proteinas 
    return [];
  }
};