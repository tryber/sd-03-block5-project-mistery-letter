const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function classeAleatoria() {
    let estiloA = Math.round(Math.random() * (estilo.length - 1));
    let tamanhoA = Math.round(Math.random() * (tamanho.length - 1));
    let rotacaoA = Math.round(Math.random() * (rotacao.length - 1));
    let inclinacaoA = Math.round(Math.random() * (rotacao.length - 1));
    let classe = estilo[estiloA] + " " + tamanho[tamanhoA] + " " + rotacao[rotacaoA] + " " + inclinacao[inclinacaoA];
    return classe; 
}

const inputCarta = document.querySelector('#carta-texto');
const botaoCarta = document.querySelector('#criar-carta');
const pCarta = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
const botaoLimpa = document.querySelector('#limpa-carta');

function addCarta() {
    let arrayCarta = inputCarta.value.split(' ');
    for (let i = 0; i < arrayCarta.length; i += 1) {
        const span = document.createElement('span');
        span.className = classeAleatoria();
        span.innerHTML = arrayCarta[i];
        pCarta.appendChild(span);
    }
    contador.innerHTML = 'Total de palavras: ' + arrayCarta.length;
    
}

botaoCarta.addEventListener('click', addCarta);

function limpaCarta() {
    let arrayCarta = inputCarta.value.split(' ');
    for (let i = arrayCarta.length - 1; i >= 0; i -= 1) {
        let spanCriado = document.querySelectorAll('span')[i];
        pCarta.removeChild(spanCriado);
    }
    contador.innerHTML = '';
    inputCarta.value = '';
}

botaoLimpa.addEventListener('click', limpaCarta);
