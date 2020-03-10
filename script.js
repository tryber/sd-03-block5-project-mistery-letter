botao_criar = document.getElementById('criar-carta');

botao_criar.addEventListener('click', function(){
    estilizarTexto();



});

function estilizarTexto(){
    let inputText = document.getElementById('carta-texto');
    let palavras = inputText.value.split(" ");

    for(let i in palavras){
        let spanElement = document.createElement('span') ;
        spanElement.innerHTML = palavras[i];
        
        console.log(spanElement);
        document.getElementById('carta-gerada').appendChild(spanElement);
    }
     
}