function writeLetter(letter) {
let container = document.getElementById("carta-gerada");
let carta = document.querySelector(letter.dataset.ref).value.split(" ");

for (let palavra of carta){
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

  container.appendChild(word);
}
}
