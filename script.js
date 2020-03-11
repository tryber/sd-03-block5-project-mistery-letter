const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
const cartaContador = document.getElementById('carta-contador');
let roda;
const array = [''];
let selecao = '';
const classesAdicionadas = 2;

const aleatorio = function (alea) {
  const numero = parseInt(Math.random() * alea, 10);
  return numero;
};

function estilizaPalavra(tl) {
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const tamanho = ['medium', 'big', 'reallybig'];
  const rotacao = ['rotateleft', 'rotateright'];
  const inclinacao = ['skewleft', 'skewright'];
  
  for (let i = 0; i < tl; i++){
    const selecionaPalavra = document.getElementsByTagName('span')[i];
    for (let j = 0; j < 2; j++) {
      roda = aleatorio(3);
      if (roda === 0) {
        selecao = 'estilo';
      }
      if (roda === 1) {
        selecao = 'tamanho';
      }
      if (roda === 2) {
        selecao = 'rotacao';
      }
      if (roda === 3) {
        selecao = 'inclinacao';
      }
  
      if (selecao === 'estilo') {
        roda = aleatorio(3);
        array[j] = estilo[roda];
      }
      if (selecao === 'tamanho') {
        roda = aleatorio(3);
        array[j] = tamanho[roda];
      }
      if (selecao === 'rotacao') {
        roda = aleatorio(2);
        array[j] = rotacao[roda];
      }
      if (selecao === 'inclinacao') {
        roda = aleatorio(2);
        array[j] = inclinacao[roda];
      }
      if (selecao === 'estilo') {
        console.log('Estilo');
      }
      // console.log('j = ', j);
      // console.log('selecao = ', selecao);
    }
    // console.log('rodei');
    selecionaPalavra.className = `${array[0]} ${array[1]}`;
    selecao = '';
  }
  // console.log('saí');
}

function separaPalavras() {
  const palavraPorPalavra = textoCarta.value.split(' ');
  const textLength = palavraPorPalavra.length;
  const conteudo = document.getElementsByClassName('conteudo')[0]; 

  if (conteudo.firstElementChild) {
    conteudo.removeChild(conteudo.firstElementChild);
  }
  
  const paragrafo = document.createElement('p');
  paragrafo.id = 'carta-gerada';
  
  for (let i = 0; i < textLength; i++) {
    paragrafo.innerHTML += `<span>${palavraPorPalavra[i]}`;
  }
  conteudo.appendChild(paragrafo);
  cartaContador.innerHTML = `${textLength}`;
  estilizaPalavra(textLength);
}

botaoCarta.addEventListener('click', separaPalavras);
