

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

    console.log(classes[Math.floor(Math.random() * 4)][Math.floor(Math.random() * classes.length)]);

    for(let i in palavras){
        let spanElement = document.createElement('span') ;
        spanElement.innerHTML = palavras[i];

        console.log(spanElement);
        document.getElementById('carta-gerada').appendChild(spanElement);
    }
     
}