const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
let cartaGerada = document.getElementById('carta-gerada');

botaoCarta.addEventListener('click', function() {
  cartaGerada.innerHTML = textoCarta.value;
});
