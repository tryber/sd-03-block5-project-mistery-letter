

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

   /*  let class1 = classes[Math.floor(Math.random() * 4)][Math.floor(Math.random() * classes.length -1)];
       let class2 = classes[Math.floor(Math.random() * 4)][Math.floor(Math.random() * classes.length -1)];
     */
    
    for(let i in palavras){
        let spanElement = document.createElement('span') ;
        spanElement.innerHTML = palavras[i];
        document.getElementById('carta-gerada').appendChild(spanElement);
    }
     
}