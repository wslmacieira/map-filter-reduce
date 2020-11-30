// Exemplo de validação para remover duplicados do array
for (let i = 0; i < array.length; i++) {
  if( array.indexOf(array[i]) === i) {
    models.push(array[i])
  } 
}

//Simples e elegante! (remover os duplicados do array)
var uniqueProducts = array.filter( function (elem, i, array) {
  return array.indexOf(elem) === i;
});

/**
   Array.prototype.filter()

 * Cria um novo array com todos elementos que
 * passram no teste ad funçaõ
 * 
 * var newArray = arr.filter(callback[,thisArg])
 */

/**
 *Exemplo: 
 *filter([🍔,🍟,🍗,🍿], isVegetarian) => [🍟,🍿]
 */


