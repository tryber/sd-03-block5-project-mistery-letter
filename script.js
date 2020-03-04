// Cria número de 0 a max
const randomNumber = (max) => 0 + Math.floor((max - 0) * Math.random());

const grupoEstilo = ["newspaper", "magazine1", "magazine2"]
const grupoTamanho = ['medium', 'big', 'reallyBig']
const grupoRotacao = ['rotateleft', 'rotateright']
const grupoInclinacao = ['skewleft', 'skewright']

document.getElementById("criar-carta").addEventListener("click", () => {
  let palavras = document.getElementById("carta-texto").value.split(' ');
  palavras.forEach(element => {
    let span = document.createElement("span")
    span.textContent = element

    let estilo = randomNumber(3)
    let tamanho = randomNumber(3)
    let rotacao = randomNumber(2)
    let inclinacao = randomNumber(2)

    if (estilo != 4) {span.classList.add(grupoEstilo[estilo])}
    if (tamanho != 4) {span.classList.add(grupoTamanho[tamanho])}
    if (rotacao != 3) {span.classList.add(grupoRotacao[rotacao])}
    if (inclinacao != 3) {span.classList.add(grupoInclinacao[inclinacao])}

    document.getElementById("carta-gerada").appendChild(span)
  });
});
