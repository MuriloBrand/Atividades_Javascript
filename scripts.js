let arr = [12, 35, 15, 32, 67, 89]

/* ForEach funciona como um for..of normal e recebe como parametro uma função 
callback que me indica o que eu vou fazer com cada item do meu array. Já a função 
callback recebe três parametros. value é o valor de cada item do array e é 
obrigatório. Index é o segundo parametro e é opcional. O array referenciado
é o terceito parametro é também é opcional  */
//arr.forEach((value /* index, array */) => console.log(value))

//o mesmo que
/* for(let item of arr) {
    console.log(item)
}
 */

/* map itera sobre o array e modifica os elementos de acordo com o desejado. Porém
ele não modifica o array original e sim me devolve um array novo. Necessariamente ao
fial de cada iteração, eu preciso retornar o valor modificado, senão ele retorna
todos os valores undefined. Ele recebe como parametro uma função 
callback que me indica o que eu vou fazer com cada item do meu array. Já a função 
callback recebe três parametros. value é o valor de cada item do array e é 
obrigatório. Index é o segundo parametro e é opcional. O array referenciado
é o terceito parametro é também é opcional  */

/* let novoArr = arr.map(item => {
    return String(item)
})
 */

/* filter itera sobre o array e me devolve um array novo com o filtro desejado. 
Necessariamente ao final de cada iteração, eu preciso retornar o valor modificado,
 senão ele retorna um array vazio. Ele recebe como parametro uma função 
callback que me indica o que eu vou fazer com cada item do meu array. Já a função 
callback recebe três parametros. value é o valor de cada item do array e é 
obrigatório. Index é o segundo parametro e é opcional. O array referenciado
é o terceiro parametro é também é opcional  */
let arrayFiltrado = arr.filter(idade => idade > 18)
console.log(arrayFiltrado)

/* reduce itera sobre o array e me devolve um elemento apenas que representa o array 
reduzido. Necessariamente ao final de cada iteração, eu preciso retornar o valor modificado,
senão ele retorna um array vazio. Ele recebe como parametro uma função 
callback que me indica o que eu vou fazer com cada item do meu array e um 
valor inicial. Já a função callback recebe quatro parametros. O primeiro parametro 
é o acumulador que é onde o reduce vai juntar os valores do array, 
o segundo parametro é o valor de cada item do array e é 
obrigatório. Index é o segundo parametro e é opcional. O array referenciado
é o terceiro parametro é também é opcional  */
let soma = arr.reduce((acumulator, value) => {
   return acumulator + value
}, 5)
console.log(soma)