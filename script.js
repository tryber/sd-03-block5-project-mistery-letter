

document.getElementById("criar-carta").addEventListener("click", () => {
  let palavras = document.getElementById("carta-texto").value.split(' ');
  palavras.forEach(element => {
    let span = document.createElement("span")
    span.textContent = element + ' '
    document.getElementById("carta-gerada").appendChild(span)
  });
});
