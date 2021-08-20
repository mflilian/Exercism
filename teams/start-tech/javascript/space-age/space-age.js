//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// objeto criado para guardar as informações e valores atribuidos para cada planeta
const orbitalPeriod = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}
  
export const age = (planet, seconds) => {           /// atribuo o valor de 'planeta' para a primeira coluna do objeto, e 'seconds' para a segunda coluna (os valores)
  return +((seconds / orbitalPeriod[planet]) / 31557600).toFixed(2) // retorno o calculo, garantindo que ele sempre que possivel me retorne um numero (por isso o + na frente), também garanto que apenas fixe 2 decimais através do toFixed(2).
  }
;
