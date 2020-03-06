window.onload = () => {
  const grupoEstilo = ["newspaper", "magazine1", "magazine2"];
  const grupoTamanho = ['medium', 'big', 'reallyBig'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];

  document.getElementById("criar-carta").addEventListener("click", () => {
    const randomNumber = (max) => Math.trunc((max) * Math.random());
    const randomClass = () => `${grupoEstilo[randomNumber(grupoEstilo.length - 1)]} ${grupoTamanho[randomNumber(grupoTamanho.length - 1)]} ${grupoRotacao[randomNumber(grupoRotacao.length - 1)]} ${grupoInclinacao[randomNumber(grupoInclinacao.length - 1)]}`;
    document.getElementById("carta-gerada").innerHTML = ''
    const palavras = document.getElementById("carta-texto").value.split(' ');
    document.getElementById("carta-contador").textContent = palavras.length;
    palavras.forEach(element => {
      const span = document.createElement("span");
      span.textContent = element;
      span.classList = randomClass();
      span.addEventListener('click', (event) => event.target.classList = randomClass());
      document.getElementById("carta-gerada").appendChild(span);
    });
  });
};
