botao_criar = document.getElementById('criar-carta');

botao_criar.addEventListener('click', function(){
    estilizarTexto();



});

function estilizarTexto(){
    let inputText = document.getElementById('carta-texto');
    console.log(inputText.value);
    document.getElementById('carta-gerada').innerHTML = inputText.value;

}