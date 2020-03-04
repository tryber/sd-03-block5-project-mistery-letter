function choseClass(n) {
  const warehouseList = document.getElementById('armazem').classList;
  const random = Math.floor(Math.random() * n);
  return warehouseList[random];
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
    span.innerText = words[word];
    paragrafo.appendChild(span);

  }
  showNumberCards(counter);
}

function LOADED() {
  let buttonMakeCards = document.getElementById('criar-carta');
  buttonMakeCards.addEventListener('click', makeCards);

  let classObject = document.styleSheets[0].rules// || document.styleSheets[0].cssRules;
  
  const pWareHouse = document.getElementById('armazem');
  for (let index = 0; index < classObject.length; index +=1) {
    pWareHouse.classList.add(classObject[index].selectorText);
  }
  choseClass(classObject.length);
  
  
}

window.onload = LOADED();
