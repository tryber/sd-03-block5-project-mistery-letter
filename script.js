const botao = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const texto = document.getElementById('carta-texto');

botao.addEventListener('click', function criarCarta() {
  const frase = texto.value;
  const fraseSplit = frase.split(' ');
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const tamanho = ['medium', 'big', 'reallybig'];
  const rotacao = ['rotateleft', 'rotateright', 'rotateleft'];
  const inclina = ['skewleft', 'skewright', 'skewleft'];
  const grupos = [estilo, tamanho, rotacao, inclina];

  for (const i in fraseSplit) {
    const span = document.createElement('span');
    carta.appendChild(span);
    span.innerText = fraseSplit[i];
    
    const gp = Math.floor(Math.random() * 3);
    const cl = Math.floor(Math.random() * 2);
    span.classList.add(grupos[gp][cl]);
  }
});
