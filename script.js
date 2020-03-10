

window.onload = function(){
  
}

botao_criar = document.getElementById('criar-carta');

botao_criar.addEventListener('click', function(){
    estilizarTexto();



});

function estilizarTexto(){    
    let classes = [['newspaper','magazine1','magazine2'],['medium','big',
      'reallybig'],['rotateleft','rotateright'],['skewleft','skewright']];
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