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

// --------------------------------------------------------------------------------------------

let num1 = 7;
let num2 = 13;
let num3 = 89;
let even = false;

if(num1%2 === 0 || num2%2 === 0 || num3%2 === 0 ){
    even = true
}
console.log(even)

// --------------------------------------------------------------------------------------------

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

let num1 = 7;
let num2 = 13;
let num3 = 89;
let odd = false;

if(num1%2 !== 0 || num2%2 !== 0 || num3%2 !== 0 ){
    odd = true
}
console.log(odd)

// --------------------------------------------------------------------------------------------

// Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

let custo = 12;
let venda = 30;
let valorTotalCusto = custo * 120/100
let lucro = venda - valorTotalCusto

if( custo < 0 || venda < 0){
    console.log("Valores Inaválidos")
} else {
    console.log("O seu lucro é " + (lucro*1000))
}

// --------------------------------------------------------------------------------------------

