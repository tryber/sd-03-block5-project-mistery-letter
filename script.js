

window.onload = function(){
  
}
 let estilo =  ['newspaper','magazine1','magazine2'];
 let tamanho =  ['medium','big', 'reallybig'];
 let rotacao =  ['rotateleft','rotateright'];
 let inclinacao = ['skewleft','skewright'];
 let spanElement ;
 let contaPalavras = 0;
botao_criar = document.getElementById('criar-carta');
botao_criar.addEventListener('click', function(){
    estilizarTexto();
});

function estilizarTexto(){    
    
    let inputText = document.getElementById('carta-texto');
    

    let palavras = inputText.value.split(" ");
    document.getElementById('carta-gerada').innerHTML = "";
    contaPalavras = 0;
    for(let i in palavras){
        spanElement = document.createElement('span') ;
       let aleatorio = Math.floor(Math.random() * 4) ;
         switch (aleatorio) {
             case 0:
                spanElement.classList.add(estilo[Math.floor(Math.random() * 3)],
                tamanho[Math.floor(Math.random() * 3)]);
                console.log("case 0",estilo[Math.floor(Math.random() * 3)],
                tamanho[Math.floor(Math.random() * 3)] );
                 break;
             case 1:
                spanElement.classList.add( rotacao[Math.floor(Math.random() * 2)],
                inclinacao[Math.floor(Math.random() * 2)]);
                console.log("case 1",  rotacao[Math.floor(Math.random() * 2)],
                inclinacao[Math.floor(Math.random() * 2)]);
                 break;
                 case 2:
                    spanElement.classList.add( estilo[Math.floor(Math.random() * 3)],
                    inclinacao[Math.floor(Math.random() * 2)]);
                    console.log("case 2",  estilo[Math.floor(Math.random() * 3)],
                    inclinacao[Math.floor(Math.random() * 2)] );
                     break;
                     case 3:
                    spanElement.classList.add( estilo[Math.floor(Math.random() * 3)],
                    rotacao[Math.floor(Math.random() * 2)]);
                    console.log("case 3", estilo[Math.floor(Math.random() * 3)],
                    rotacao[Math.floor(Math.random() * 2)]);
                     break;
                     case 4:
                    spanElement.classList.add( tamanho[Math.floor(Math.random() * 3)],
                    rotacao[Math.floor(Math.random() * 2)]);
                    console.log("case 4", tamanho[Math.floor(Math.random() * 3)],
                    rotacao[Math.floor(Math.random() * 2)] );
                     break;
             default:
                 break;
         }

       /* 
        spanElement.classList.add(estilo[Math.floor(Math.random() * 3)],
                                  tamanho[Math.floor(Math.random() * 3)],
                                  rotacao[Math.floor(Math.random() * 2)],
                                  inclinacao[Math.floor(Math.random() * 2)]); */
        spanElement.innerHTML = palavras[i];
       
        
        document.getElementById('carta-gerada').appendChild(spanElement);
        spanElement.addEventListener('click', function(event){
            event.target.classList.remove();
            event.target.classList.add(estilo[Math.floor(Math.random() * 3)],
            tamanho[Math.floor(Math.random() * 3)],
            rotacao[Math.floor(Math.random() * 2)],
            inclinacao[Math.floor(Math.random() * 2)]);
       });
       contaPalavras += 1;
       
    }
    document.getElementById('carta-contador').innerHTML = contaPalavras;  
     
}