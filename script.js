const inputCarta = document.getElementById('carta-texto');
const botaoCarta = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright']

function addCarta() {
    let arrayCarta = inputCarta.value.split(' ');
    console.log(arrayCarta);
    for (let i = 0; i < arrayCarta.length; i += 1) {
        const span = document.createElement('span');
        span.innerHTML = arrayCarta[i];
        pCarta.appendChild(span);
    }
}

botaoCarta.addEventListener('click', addCarta);
