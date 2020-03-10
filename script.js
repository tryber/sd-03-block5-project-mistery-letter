botao_criar = document.getElementById('criar-carta');

botao_criar.addEventListener('click', function(){
    estilizarTexto();



});

function estilizarTexto(){
    let inputText = document.getElementById('carta-texto');
    console.log(inputText.value);
    let spanElement = document.createElement('span') ;
    spanElement.innerHTML = inputText.value;
    console.log(spanElement);
    document.getElementById('carta-gerada').appendChild(spanElement);

}