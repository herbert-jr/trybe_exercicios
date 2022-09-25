// // Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// // Adição 
// // Subtração 
// // Multiplicação 
// // Divisão 
// // Módulo 
// // --------------------------------------------------------------------------------------------

let a = 6;
let b = 4;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

// // Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// // Bonus: use somente um if.

// // --------------------------------------------------------------------------------------------

let num1 = 7;
let num2 = 13;
let num3 = 89;
let even = false;

if(num1%2 === 0 || num2%2 === 0 || num3%2 === 0 ){
    even = true
}
console.log(even)

// // --------------------------------------------------------------------------------------------

// // Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// // Bonus: use somente um if.

let number1 = 7;
let number2 = 13;
let number3 = 89;
let odd = false;

if(num1%2 !== 0 || num2%2 !== 0 || num3%2 !== 0 ){
    odd = true
}
console.log(odd)

// // --------------------------------------------------------------------------------------------

// // Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// // Atente que, sobre o custo do produto, incide um imposto de 20%.

// // Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// // valorCustoTotal = valorCusto + impostoSobreOCusto;
// // lucro = valorVenda - valorCustoTotal (lucro de um produto);

let custo = 12;
let venda = 30;
let valorTotalCusto = custo * 1.2
let lucro = venda - valorTotalCusto

if( custo < 0 || venda < 0){
    console.log("Valores Inaválidos")
} else {
    console.log("O seu lucro é " + (lucro*1000))
}

// --------------------------------------------------------------------------------------------

// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 8000;
let taxaINSS = 0;
let taxaIR = 0;

if(salarioBruto <= 1556.94){
    taxaINSS = salarioBruto*0.08
}
else if(salarioBruto <= 2594.92){
    taxaINSS = salarioBruto*0.09
}
else if(salarioBruto <= 5189.82){
    taxaINSS = salarioBruto*0.11
}
else if(salarioBruto > 5189.82){
    taxaINSS = 570.88
}

const salarioINSS = salarioBruto-taxaINSS;

if(salarioINSS <= 1903.98){
    taxaIR = 0
}
else if(salarioINSS <= 2826.65){
    taxaIR = (salarioINSS*0.075) - 142.80
}
else if(salarioINSS <= 3751.05){
    taxaIR = (salarioINSS*0.15) - 354.80
}
else if(salarioINSS <= 4664.68){
    taxaIR = (salarioINSS*0.225) - 636.13
}
else if(salarioINSS > 4664.68){
    taxaIR = (salarioINSS*0.275) - 869.36
}

let salarioLiquido = salarioINSS - taxaIR

console.log("Seu salário liquído é R$" + salarioLiquido)