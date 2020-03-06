// Cria número de 0 a max
const randomNumber = (max) => 0 + Math.floor((max - 0) * Math.random());

const grupoEstilo = ["newspaper", "magazine1", "magazine2"]
const grupoTamanho = ['medium', 'big', 'reallyBig']
const grupoRotacao = ['rotateleft', 'rotateright']
const grupoInclinacao = ['skewleft', 'skewright']

const randomClass = () => `${grupoEstilo[randomNumber(grupoEstilo.length)]} ${grupoTamanho[randomNumber(grupoTamanho.length)]} ${grupoRotacao[randomNumber(grupoRotacao.length)]} ${grupoInclinacao[randomNumber(grupoInclinacao.length)]}`

console.log(randomClass())
document.getElementById("criar-carta").addEventListener("click", () => {
  document.getElementById("carta-gerada").innerHTML = ''
  let palavras = document.getElementById("carta-texto").value.split(' ');
  palavras.forEach(element => {
    let span = document.createElement("span")
    span.textContent = element
    span.classList = randomClass()
    span.addEventListener('click', (event) => event.target.classList = randomClass())
    document.getElementById("carta-gerada").appendChild(span)
  });
});
