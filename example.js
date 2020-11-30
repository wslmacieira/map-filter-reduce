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
 * Array.prototype.filter()
 *
 * Cria um novo array com todos elementos que
 * passram no teste ad funçaõ
 * 
 * var newArray = arr.filter(callback[,thisArg])
 */

/**
 * Exemplo: 
 * filter([🍔,🍟,🍗,🍿], isVegetarian) => [🍟,🍿]
 */

 /**
  * Array.prototype.map()
  * 
  * Chama o callback para cada elemento e devolve um
  * novo array com a mesma quantidade de itens
  * 
  * var newArray = arr.map(callback[,thisArg])
  */

  /**
 * Exemplo: 
 * map([🐄,🥔,🐔,🌽], cook) => [🍔,🍟,🍗,🍿]
 */

 /**
  * Array.prototype.reduce()
  * 
  * Executa uma função para cada elemento
  * retornando um único valor de retorno
  * 
  * var newArray = arr.map(callback[,valorInicial])
  */

  /**
   * Exemplo
   * reduce([🍔,🍟,🍗,🍿], eat) => 💩
   */


