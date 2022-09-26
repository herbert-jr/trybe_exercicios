let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let index = 0; index < numbers.length; index++ ){
    console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for(let index = 0; index < numbers.length; index++ ){
    soma += numbers[index]
}
console.log(soma)

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let soma = 0;
for(let index = 0; index < numbers.length; index++ ){
    soma += numbers[index]
}
console.log(soma/numbers.length)

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let soma = 0;
for(let index = 0; index < numbers.length; index++ ){
    soma += numbers[index]
}

let media = soma/numbers.length

if(media > 20){
    console.log("valor maior que 20")
}
else{
    console.log('Valor menor ou igual a 20')
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let bigger = 0;
for(let index = 0; index < numbers.length; index++ ){
    if(bigger < numbers[index]){
        bigger = numbers[index]
    }
}

console.log(bigger)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let odd = 0;
for(let index = 0; index < numbers.length; index++ ){
    if(numbers[index]%2 !== 0){
        odd++
    }
}

if(odd === 0){
    console.log('nenhum valor ímpar encontrado')
}else{
console.log(odd)
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let smaller = numbers[0]
for(let index = 0; index < numbers.length; index++ ){
    if(smaller>numbers[index]){
        smaller=numbers[index]
    }
}

console.log(smaller)

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let newArray = [];

for(index = 1; index <= 25; index++){
    newArray.push(index)
}
console.log(newArray)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let newArray = [];

for(let index = 1; index <= 25; index++){
    newArray.push(index)
}
console.log(newArray)

for(let index = 0; index<newArray.length; index++){
    console.log(newArray[index]/2)
}