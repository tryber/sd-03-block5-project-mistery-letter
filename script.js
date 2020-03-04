const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function classeAleatoria() {
  const estiloA = Math.round(Math.random() * (estilo.length - 1));
  const tamanhoA = Math.round(Math.random() * (tamanho.length - 1));
  const rotacaoA = Math.round(Math.random() * (rotacao.length - 1));
  const inclinacaoA = Math.round(Math.random() * (rotacao.length - 1));
  const classe = estilo[estiloA] + ' ' + tamanho[tamanhoA] + ' ' + rotacao[rotacaoA] + ' ' + inclinacao[inclinacaoA];
  return classe;
}

const inputCarta = document.querySelector('#carta-texto');
const botaoCarta = document.querySelector('#criar-carta');
const pCarta = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
const botaoLimpa = document.querySelector('#limpa-carta');

function novaClasse(j) {
  const spanCriado = document.querySelectorAll('span');
  spanCriado[j].addEventListener('click', function () {
    spanCriado[j].className = classeAleatoria();
  });
}

function addCarta() {
  const arrayCarta = inputCarta.value.split(' ');
  for (let i = 0; i < arrayCarta.length; i += 1) {
    const span = document.createElement('span');
    span.className = classeAleatoria();
    span.innerHTML = arrayCarta[i];
    pCarta.appendChild(span);
  }
  contador.innerHTML = arrayCarta.length;
  for (let j = 0; j < arrayCarta.length; j += 1) {
    novaClasse(j);
  }
}

botaoCarta.addEventListener('click', addCarta);

function limpaCarta() {
  const arrayCarta = inputCarta.value.split(' ');
  for (let i = arrayCarta.length - 1; i >= 0; i -= 1) {
    spanCriado = document.querySelectorAll('span');
    pCarta.removeChild(spanCriado[i]);
  }
  contador.innerHTML = '';
  inputCarta.value = '';
}

botaoLimpa.addEventListener('click', limpaCarta);
