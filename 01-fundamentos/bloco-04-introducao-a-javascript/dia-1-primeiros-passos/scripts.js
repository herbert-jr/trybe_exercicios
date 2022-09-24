// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição 
// Subtração 
// Multiplicação 
// Divisão 
// Módulo 
// --------------------------------------------------------------------------------------------

let a = 6;
let b = 4;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

let num1 = 7;
let num2 = 13;
let num3 = 82;

if(num1%2 === 0 || num2%2 === 0 || num3%2 === 0 ){
    console.log(true)
} else{
    console.log(false)
}