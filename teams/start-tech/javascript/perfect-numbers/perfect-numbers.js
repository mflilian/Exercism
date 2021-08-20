//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  
  if(number < 1){
    throw new Error('Classification is only possible for natural numbers.');
  } // se esse numero for menor que 1 já nao rola pq so vamos trabalhar com numeros naturais

  let sumFactors = 0; //estabeleço o primeiro valor da soma que vai ser 0 

  for(let i = 0; i < number; i++) { // declaro o numero que vai ser iterado, servido de base pra todo loop, e enquanto ele for menor que o numero, vamos incrementar ele em 1 ao final de todo loop
    if(number % i === 0 ) sumFactors += i; // se o resto do numero dividido por i for igual a 0, o sumFactors vai somar mais um no valor q ele já possui
  }

  if (sumFactors === number) return 'perfect'; // se a soma dos fatores for igual ao numero, é perfeito
  if (sumFactors < number) return 'deficient'; // se a soma for menor que o numero, é deficiente
  if (sumFactors > number) return 'abundant'; // se a soma for maior que o numero, é abundante

};