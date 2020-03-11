const botao = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const texto = document.getElementById('carta-texto');

botao.addEventListener('click', function criarCarta() {
  const frase = texto.value;
  var frasesp = frase.split(' ');
  
  for (let i in frasesp){
    const span = document.createElement('span');
    carta.appendChild(span);
    span.innerText = frasesp[i] + ' ';
  }
});
