
    //   Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    //   - document.getElementById()
    //   - document.getElementsByClassName('center-content')
    //   - document.getElementsByTagName()

    //   1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

    function changePara() {
        const p = document.getElementsByTagName('p')[1];

        p.innerText = 'Eu quero ser um Pleno ou Senior em Front-end'
    }

    changePara() 


    //   2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

    function changeColor() {
        const change = document.getElementsByClassName('main-content')[0]
        change.style.backgroundColor = 'rgb(76,164,109)'
    }
    changeColor()

    //   3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 
    function changeRed(){
        const redBack = document.getElementsByClassName('center-content')[0]
        redBack.style.backgroundColor = 'white'
    }
    changeRed()

    //   4. Crie e execute uma função que corrija o texto da tag <h1>.

    function hiright() {
        const h1 = document.getElementsByClassName('title')[0]
        h1.innerText = 'Exercício - JavaScript'

    }
    hiright()

    //   5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

    function changePar() {
        const p = document.getElementsByTagName('p')[0];

        p.innerText = p.innerText.toUpperCase()
    }

    changePar() 

    //   6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      
function loopPara(){
    const p = document.getElementsByTagName('p')
    for( let index in p){
        console.log(p[index].innerHTML)
    }
}
loopPara()