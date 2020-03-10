function writeLetter(letter) {
let container = document.getElementById("carta-gerada");
let carta = document.querySelector(letter.dataset.ref).value.split(" ");

container.innerHTML = "";

for (let palavra of carta){
  if (palavra == ""){
    return
  }

  let word = document.createElement('span');
  word.innerHTML = palavra;

  let classesNumber = Math.floor(Math.random()*3)+2;

  let grupos = [
    [`newspaper`, `magazine1`, `magazine2`],
    [`medium`, `big`, `reallybig`],
    [`rotateleft`, `rotateright`],
    [`skewleft`, `skewright`]
  ]

  for (let i = 0; i < classesNumber ; i++) {
    word.classList.add(grupos[i][Math.floor(Math.random()* grupos[i].length) ]);

  }

  word.addEventListener('click',setNewStyle);
  word.style.cursor = "pointer";

  container.appendChild(word);
}

setContador()
}

function setNewStyle(e) {
  e.target.setAttribute("class",'')

  let classesNumber = Math.floor(Math.random()*3)+2;

  let grupos = [
    [`newspaper`, `magazine1`, `magazine2`],
    [`medium`, `big`, `reallybig`],
    [`rotateleft`, `rotateright`],
    [`skewleft`, `skewright`]
  ]

  for (let i = 0; i < classesNumber ; i++) {
    e.target.classList.add(grupos[i][Math.floor(Math.random()* grupos[i].length) ]);

  }


}

function setContador() {
  let contador = document.querySelector("#carta-contador")
  let contadorNumero = document.querySelector("#carta-gerada").childElementCount;
  contador.innerHTML = contadorNumero;

}
