// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let reverseWord = '';

// for(let index = 0 ; index < word.length; index++){
// reverseWord += word[word.length - 1 - index]
// }

// console.log(reverseWord)

// -------------------------------------------------------------------------

// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let num = 10;
let fatorial = 1;

for(let index = num; index>0; index--){
    fatorial = fatorial*index
}
console.log(fatorial)

// -------------------------------------------------------------------------


