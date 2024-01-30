let idades = let idades = [12, 18, 34, 55, 25]

let ultimaIdade = idades.pop() /* retira o ultimo item do array e retorna */
idades.shift() /* retira o primeiro valor da lista */
idades.splice(1, 1, 47, 27, 34) /* o primeiro valor é o número do index, o segundo valor é a quantidade de elementos que ele vai retirar, e o terceiro valor os 
números que devem substituir os que foram retirados */
idades.push(6) /* coloca  um elemento como ultimo elemento do array */
idades.unshift(2) /* coloca um elemento como primeiro elemento do array */

console.log(idades)

for(let i = 0; i< idades.length; i++) {
    console.log(idade{i})
}