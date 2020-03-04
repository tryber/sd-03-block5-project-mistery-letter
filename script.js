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
  console.log(classes);
  return classes;
}

function showNumberCards(counter) {
  const p = document.getElementById('contador');
  p.innerText = counter;
}

function makeCards () {
  const inputSentence = document.getElementById('carta-texto').value;
  const words = inputSentence.split(' ');
  const paragrafo = document.getElementById('carta-gerada');

  let counter = 0;
  for (let word of words) {
    counter += 1;
    let span = document.createElement('span');
    span.innerText = word;
    span.className = choseClass();
    paragrafo.appendChild(span);

  }
  showNumberCards(counter);
}

function LOADED() {
  let buttonMakeCards = document.getElementById('criar-carta');
  buttonMakeCards.addEventListener('click', makeCards);

  let classObject = document.styleSheets[0].rules// || document.styleSheets[0].cssRules;
  
  
}

window.onload = LOADED();
