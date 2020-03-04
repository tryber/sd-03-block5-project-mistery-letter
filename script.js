// Get variables
const createButton = document.getElementById("criar-carta");

// Functions
function createFunction() {
  let separadas = document.getElementById("carta-texto").value.split(" ");
  for (let i = 0; i < separadas.length; i += 1) {
    let createSpan = document.createElement("span");
    let cartaGerada = document.getElementById("carta-gerada");
    createSpan.innerHTML = separadas[i];
    cartaGerada.appendChild(createSpan);
  }
}

// Event listeners
createButton.addEventListener("click", createFunction);
