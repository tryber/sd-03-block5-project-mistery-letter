function countWords(event){
  const message = document.getElementById("carta-texto").value;
  const messageArray = message.split(" ");
  const numberWords = messageArray.length;
  document.getElementById("carta-contador").innerHTML = numberWords;
}
function deletePrevious(event){
  if (document.getElementById("carta-gerada") != null){
    document.getElementById("carta-gerada").innerHTML = '';
  }
}
function pickClasses(event) {
  let classes = [['newspaper','magazine1','magazine2','medium'],['big','reallybig', ""],['rotateleft','rotateright', ""],['skewleft','skewright', ""]];
  let style = classes[0][Math.floor(Math.random() * 2)];
  let size = classes[1][Math.floor(Math.random() * 2)];
  let rotation = classes[2][Math.floor(Math.random() * 1)];
  let inclination = classes[3][Math.floor(Math.random() * 1)];
  let resultArray = [style, size, rotation, inclination];
  return resultArray;
}
function createLetter(event) {
  deletePrevious();
  const message = document.getElementById("carta-texto").value;
  const messageArray = message.split(" ");
  for (let i = 0; i < messageArray.length; i += 1) {
    let newSpan = document.createElement("span");
    document.querySelector("#carta-gerada").appendChild(newSpan);
    newSpan.innerHTML = messageArray[i];
    let resultArray = pickClasses();
    for (let i = 0; i < resultArray.length; i += 1){
        newSpan.classList.add(resultArray[i]);
    }
  }
  countWords();
  let allWords = document.querySelectorAll("span");
  for (let i = 0; i < allWords.length; i += 1){
    allWords[i].addEventListener('click', changeClasses);
  }
}
function changeClasses(event){
  let resultArray = pickClasses();
  for (let i = 0; i < resultArray.length; i += 1){
    event.target.classList.add(resultArray[i]);
  }
}
document.getElementById("criar-carta").addEventListener('click', createLetter);