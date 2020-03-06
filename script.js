window.onload = () => {
  const randomNumber = (max) => Math.floor((max) * Math.random());
  const grupoEstilo = ["newspaper", "magazine1", "magazine2"]
  const grupoTamanho = ['medium', 'big', 'reallyBig']
  const grupoRotacao = ['rotateleft', 'rotateright']
  const grupoInclinacao = ['skewleft', 'skewright']
  const randomClass = () => `${grupoEstilo[randomNumber(grupoEstilo.length - 1)]} ${grupoTamanho[randomNumber(grupoTamanho.length - 1)]} ${grupoRotacao[randomNumber(grupoRotacao.length)]} ${grupoInclinacao[randomNumber(grupoInclinacao.length)]}`

  document.getElementById("criar-carta").addEventListener("click", () => {
    console.log(randomNumber(3))
    console.log(grupoEstilo.length)
    document.getElementById("carta-gerada").innerHTML = ''
    let palavras = document.getElementById("carta-texto").value.split(' ');
    document.getElementById("carta-contador").textContent = palavras.length;
    palavras.forEach(element => {
      let span = document.createElement("span")
      span.textContent = element
      span.classList = randomClass()
      span.addEventListener('click', (event) => event.target.classList = randomClass())
      document.getElementById("carta-gerada").appendChild(span)
    });
  });
}
