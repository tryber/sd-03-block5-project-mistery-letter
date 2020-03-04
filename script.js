const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

botaoCarta.addEventListener('click', function () {
  cartaGerada.innerHTML = textoCarta.value;
});
