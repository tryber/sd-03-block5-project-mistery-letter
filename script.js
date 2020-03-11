const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
const cartaContador = document.getElementById('carta-contador');
const array = [''];
let roda;
let n = 10;

const aleatorio = function (alea) {
  const numero = parseInt(Math.random() * alea, 10);
  return numero;
};

function estilizaPalavra(tl) {
  let estilizador = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  for (let i = 0; i < tl; i += 1) {
    const selecionaPalavra = document.getElementsByTagName('span')[i];

    for (let j = 0; j < 2; j +=1) {
      roda = aleatorio(n);

      if (estilizador[roda] === 'newspaper' || estilizador[roda] === 'magazine1' || estilizador[roda] === 'magazine2') {
        array[j] = estilizador[roda];
        estilizador.splice(0, 3);
        n = estilizador.length;
      } else if (estilizador[roda] === 'medium' || estilizador[roda] === 'big' || estilizador[roda] === 'reallybig') {
        array[j] = estilizador[roda];
        estilizador.splice(3, 3);
        n = estilizador.length;
      } else if (estilizador[roda] === 'rotateright' || estilizador[roda] === 'rotateleft') {
        array[j] = estilizador[roda];
        estilizador.splice(6, 2);
        n = estilizador.length;
      } else if (estilizador[roda] === 'skewright' || estilizador[roda] === 'skewleft') {
        array[j] = estilizador[roda];
        estilizador.splice(8, 2);
        n = estilizador.length;
      }
    }
    selecionaPalavra.className = `${array[0]} ${array[1]}`;
    estilizador = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  }
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

  for (let i = 0; i < textLength; i += 1) {
    paragrafo.innerHTML += `<span>${palavraPorPalavra[i]}`;
  }
  conteudo.appendChild(paragrafo);
  cartaContador.innerHTML = `${textLength}`;
  estilizaPalavra(textLength);
}

botaoCarta.addEventListener('click', separaPalavras);
