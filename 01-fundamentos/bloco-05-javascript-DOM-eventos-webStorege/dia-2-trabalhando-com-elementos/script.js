 // Acesse o elemento elementoOndeVoceEsta.
 console.log(document.getElementById('elementoOndeVoceEsta'))
 // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
 const pai = document.getElementById('elementoOndeVoceEsta').parentElement;
 
 pai.style.color = 'red';
 
 // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
 
 const filhoUm = document.getElementById('elementoOndeVoceEsta').firstElementChild;
 
 filhoUm.innerHTML = "Hoje eu sou Mengão"
 
 // Acesse o primeiroFilho a partir de pai.
 
 const paiPraFilho = document.getElementById('pai').children[0];
 
 console.log(paiPraFilho)
 
 // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
 
 // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
 
 // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
 
 // Agora acesse o terceiroFilho a partir de pai.
 
   </script>