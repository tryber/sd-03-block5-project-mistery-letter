const botao = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const texto = document.getElementById('carta-texto');

botao.addEventListener('click', function criarCarta() {
  for (let i=0; i<7; i++){
    const span = document.createElement('span');
    carta.appendChild(span);
    span.innerText = texto.value + ' ';
  }
});
