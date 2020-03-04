function LOADED() {
  let buttonMakeCards = document.getElementById('criar-carta');
  buttonMakeCards.addEventListener('click', makeCards)
}

window.onload = LOADED();
