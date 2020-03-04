function pickStyle(event) {
    let style = ["newspaper", "magazine1", "magazine2", ""];
    choosed = style[Math.floor(Math.random() * 3)];
    return choosed;
}
function pickSize(event) {
    let size = ["medium", "big", "reallybig", ""];
    choosed = size[Math.floor(Math.random() * 3)];
    return choosed;
}
function pickRotation(event) {
    let rotation = ["rotateleft", "rotaterigth", ""];
    choosed = rotation[Math.floor(Math.random() * 2)];
    return choosed;
}
function pickInclination(event) {
    let inclination = ["skewleft", "skewright", ""];
    choosed = inclination[Math.floor(Math.random() * 2)];
    return choosed;
}
function createLetter(event) {
    debugger
    let message = document.getElementById("carta-texto").value;
    let messageArray = message.split(" ");
    for (let i = 0; i < messageArray.length; i += 1) {
        let newSpan = document.createElement("span");
        document.querySelector("#carta-gerada").appendChild(newSpan);
        newSpan.innerHTML = messageArray[i];
        newSpan.classList.add(pickStyle(), pickSize(), pickRotation(), pickInclination());
    }
}
document.getElementById("criar-carta").addEventListener('click', createLetter);