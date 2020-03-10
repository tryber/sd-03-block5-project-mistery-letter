const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');
let roda;
const array = [''];

const aleatorio = function () {
  const numero = parseInt(Math.random() * 9, 10);
  return numero;
};

// Exclui classes iguais
function classesIguais() {
  if (roda === 0 || roda === 1 || roda === 2) {
    while (roda <= 2) {
      roda = aleatorio();
    }
  } else if (roda === 3 || roda === 4 || roda === 5) {
    while (roda >= 3 && roda <= 5) {
      roda = aleatorio();
    }
  } else if (roda === 6 || roda === 7) {
    while (roda > 5 && roda < 8) {
      roda = aleatorio();
    }
  } else if (roda === 8 || roda === 9) {
    while (roda > 7 && roda < 10) {
      roda = aleatorio();
    }
  }
return roda;  
}

function estilizaPalavra(tl) {
  let estilo = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  for (let i = 0; i < tl; i += 1) {
    const selecionaPalavra = document.getElementsByTagName('span')[i];
    roda = aleatorio();
    array[0] = estilo[roda];
    array[1] = estilo[classesIguais()];
    selecionaPalavra.className = `${array[0]} ${array[1]}`;
  }
}

function separaPalavras() {
  const palavraPorPalavra = textoCarta.value.split(' ');
  const textLength = palavraPorPalavra.length;
  for (let i = 0; i < textLength; i += 1) {
    cartaGerada.innerHTML += `<span>${palavraPorPalavra[i]}`;
  }
  cartaContador.innerHTML = `${textLength}`;
  estilizaPalavra(textLength);
}

botaoCarta.addEventListener('click', separaPalavras);
