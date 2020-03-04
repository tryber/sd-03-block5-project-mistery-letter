function choseClass() {
  let classes = '';
  let number = 0;
  const pEstilo = document.getElementById('armazem-estilo').classList;

  number = Math.floor(Math.random() * 3);
  classes += `${pEstilo[number]}`;

  const pTamanho = document.getElementById('armazem-tamanho').classList;
  number = Math.floor(Math.random() * 3);
  classes += ` ${pTamanho[number]}`;

  const pRotacao = document.getElementById('armazem-rotacao').classList;
  number = Math.floor(Math.random() * 2);
  classes += ` ${pRotacao[number]}`;

  const pInclinacao = document.getElementById('armazem-inclinacao').classList;
  number = Math.floor(Math.random() * 2);
  classes += ` ${pInclinacao[number]}`;

  return classes;
}

function showNumberCards(counter) {
  const p = document.getElementById('carta-contador');
  p.innerText = counter;
}

function reClasser() {
  event.target.className = choseClass();
}

function makeCards() {
  const inputSentence = document.getElementById('carta-texto').value;
  const words = inputSentence.split(' ');
  const paragrafo = document.getElementById('carta-gerada');

  let counter = 0;
  for (const word of words) {
    counter += 1;
    const span = document.createElement('span');

    span.innerText = word;
    span.className = choseClass();
    span.addEventListener('click', reClasser);

    paragrafo.appendChild(span);
  }
  showNumberCards(counter);
}

function LOADED() {
  const buttonMakeCards = document.getElementById('criar-carta');
  buttonMakeCards.addEventListener('click', makeCards);
}

window.onload = LOADED();
