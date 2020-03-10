

window.onload = function(){
  
}

 let estilo =  ['newspaper','magazine1','magazine2'];
 let tamanho =  ['medium','big', 'reallybig'];
 let rotacao =  ['rotateleft','rotateright'];
 let inclinacao = ['skewleft','skewright'];
 
botao_criar = document.getElementById('criar-carta');
botao_criar.addEventListener('click', function(){
    estilizarTexto();
});

function estilizarTexto(){    
    
    let inputText = document.getElementById('carta-texto');
    

    let palavras = inputText.value.split(" ");
    document.getElementById('carta-gerada').innerHTML = "";
    for(let i in palavras){

        let spanElement = document.createElement('span') ;
        spanElement.classList.add(estilo[Math.floor(Math.random() * 3)],
                                  tamanho[Math.floor(Math.random() * 3)],
                                  rotacao[Math.floor(Math.random() * 2)],
                                  inclinacao[Math.floor(Math.random() * 2)]);
        spanElement.innerHTML = palavras[i];
        
        document.getElementById('carta-gerada').appendChild(spanElement);
    }
     
}