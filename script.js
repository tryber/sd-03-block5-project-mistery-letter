// Get variables
const createButton = document.getElementById('criar-carta');

// Functions
function createLetter() {
  const separadas = document.getElementById('carta-texto').value.split(' ');
  for (let i = 0; i < separadas.length; i += 1) {
    const createSpan = document.createElement('span');
    const cartaGerada = document.getElementById('carta-gerada');
    createSpan.innerHTML = separadas[i];
    cartaGerada.appendChild(createSpan);
  }
}

// Event listeners
createButton.addEventListener('click', createLetter);
