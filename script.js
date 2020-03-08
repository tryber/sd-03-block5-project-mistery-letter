//  variáveis

const inputText = document.querySelector('#carta-texto');
const botao = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');

// Funções

function montarParagrafo(item) {
    const span = document.createElement('span');
    span.innerHTML = item;
    paragrafo.appendChild(span);
}

function gerarParagrafo() {
    const textoDigitado = inputText.value.split(" ");
    textoDigitado.forEach(montarParagrafo);
}


//  event listener

botao.addEventListener('click',gerarParagrafo);