function choseClass(n) {
  const randomclass = Math.floor(Math.random() * n);
  return randomclass;
}

function makeCards () {
  const inputSentence = document.getElementById('carta-texto').value;
  const words = inputSentence.split(' ');
  const paragrafo = document.getElementById('carta-gerada');

  let counter = 0;
  for (let word of words) {
    counter += 1;
    let span = document.createElement('span');
    span.innerText = words[word];
    paragrafo.appendChild(span);

  }
}

function LOADED() {
  let buttonMakeCards = document.getElementById('criar-carta');
  buttonMakeCards.addEventListener('click', makeCards);
}

window.onload = LOADED();
