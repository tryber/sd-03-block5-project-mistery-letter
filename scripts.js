const gEstilo = [`newspaper`, `magazine1`, `magazine2`],
gTamanho = [`medium`, `big`, `reallybig`],
gRotacao = [`rotateleft`, `rotateright`],
gInclina = [`skewleft`, `skewright`];
let contador = document.getElementById("carta-contador");

function geraNum(n) {
    return (Math.floor(Math.random() * n));
  }

function divideString() {
const frase = document.getElementById("carta-texto").value,
areaCarta = document.getElementById("carta-gerada")
let arr = frase.split(' ');
contador.textContent = `Total de cartas: ${arr.length}`;
for (let i = 0; i < arr.length; i++){
    let palavra = document.createElement("span");
    palavra.addEventListener('click',selectEstilo);
    palavra.innerHTML = `${arr[i]} `;
    palavra.classList.toggle(gEstilo[geraNum(3)]);
    palavra.classList.toggle(gTamanho[geraNum(3)]);
    palavra.classList.toggle(gRotacao[geraNum(2)]);
    palavra.classList.toggle(gInclina[geraNum(2)]);
    areaCarta.appendChild(palavra);
    }
}

function selectEstilo() {
    console.log(this);
    this.className.toggle(gEstilo[geraNum(2)]);
    this.className.toggle(gTamanho[geraNum(2)]);
    this.className.toggle(gRotacao[geraNum(1)]);
    this.className.toggle(gInclina[geraNum(1)]);
}
