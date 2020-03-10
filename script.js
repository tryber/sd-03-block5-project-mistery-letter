//  variáveis

const inputText = document.querySelector('#carta-texto');
const botao = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');

// Funções


function adicionarClasse(span) {
    const estilo = ['newspaper', 'magazine1', 'magazine2'];
    const tamanho = ['medium','big','reallybig'];
    const transform = [rotacao = ['rotateleft', 'rotateright'],inclinacao = ['skewleft', 'skewright']];
    const aleatoriedade = [estilo,tamanho,transform[Math.floor(Math.random() * 2)]];
    if (span.classList) {
        span.removeAttribute('class');
    }
    for (let i = 0; i < aleatoriedade.length; i += 1) {
        if (i < 2) {
            span.classList.add(aleatoriedade[i][Math.floor(Math.random() * 3)]);
        } else {
            span.classList.add(aleatoriedade[i][Math.floor(Math.random() * 2)]);
        }
    }
}

function addCustomClass(span) {
    span.addEventListener('click', function(){
        adicionarClasse(span);
    })
}


function montarParagrafo(item) {
    const span = document.createElement('span');
    span.innerHTML = item;
    adicionarClasse(span);
    addCustomClass(span);
    paragrafo.appendChild(span);
}

function gerarParagrafo() {
    if (paragrafo) {
        paragrafo.innerHTML = '';
    }
    const textoDigitado = inputText.value.split(" ");
    textoDigitado.forEach(montarParagrafo);
}

function teste () {
    console.log('funciona');
}

//  event listener

botao.addEventListener('click',gerarParagrafo);