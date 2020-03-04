const inputCarta = document.getElementById('carta-texto');
const botaoCarta = document.getElementById('criar-carta');
const pCarta = document.getElementById('carta-gerada');
const estilo = []

function addCarta() {
    let arrayCarta = inputCarta.value.split(" ");
    console.log(arrayCarta);
    for (let i = 0; i < arrayCarta.length; i += 1) {
        const span = document.createElement('span');
        span.innerHTML = arrayCarta[i];
        pCarta.appendChild(span);
    }
}

botaoCarta.addEventListener('click', addCarta);
