function countWords() {
  const message = document.getElementById('carta-texto').value;
  const messageArray = message.split('');
  const numberWords = messageArray.length;
  document.getElementById('carta-contador').innerHTML = numberWords;
}
function deletePrevious() {
  if (document.getElementById('carta-gerada') != null) {
    document.getElementById('carta-gerada').innerHTML = '';
  }
}
function pickClasses() {
  const classes = [['newspaper' , 'magazine1' , 'magazine2' , 'medium'] , ['big' , 'reallybig'] , ['rotateleft' , 'rotateright'] , ['skewleft' , 'skewright']];
  const style = classes[0][Math.trunc(Math.random() * 3)];
  const size = classes[1][Math.trunc(Math.random() * 3)];
  const rotation = classes[2][Math.trunc(Math.random() * 2)];
  const inclination = classes[3][Math.trunc(Math.random() * 2)];
  const resultArray = [style, size, rotation, inclination];
  return resultArray;
}
function changeClasses(event) {
  event.target.className = ('');
  let resultArray = pickClasses();
  for (let i = 0; i < resultArray.length; i += 1) {
    event.target.classList.add(resultArray[i]);
  }
}
function createLetter() {
  deletePrevious();
  const message = document.getElementById('carta-texto').value;
  const messageArray = message.split(' ');
  for (let i = 0; i < messageArray.length; i += 1) {
    const newSpan = document.createElement('span');
    document.querySelector('#carta-gerada').appendChild(newSpan);
    newSpan.addEventListener('click', changeClasses);
    newSpan.innerHTML = messageArray[i];
    const resultArray = pickClasses();
    for (let k = 0; k < resultArray.length; k += 1) {
      newSpan.classList.add(resultArray[i]);
    }
  }
  countWords();
}
document.getElementById('criar-carta').addEventListener('click', createLetter);
