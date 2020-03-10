const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');
let estilo = [''];

const aleatorio = function () {
  let numero = parseInt(Math.random() * 10, 10);
  /*while (numero > 3 || numero === 0) {
    numero = parseInt(Math.random() * 10, 10);
  }
  return numero;
  */
  return numero;
};

function estilizaPalavra(tl) {
  let roda;
  estilo = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  for (let i = 0; i < tl; i += 1) {
    const selecionaPalavra = document.getElementsByTagName('span')[i];
    roda = aleatorio();

    console.log(roda);
    
    selecionaPalavra.className = `${estilo[roda]}`;
    // Exclui classes iguais
    if (roda === 0 || roda === 1 || roda === 2) {
       while(roda <= 2) {
        roda = aleatorio();
       }
    }else if (roda === 3 || roda === 4 || roda === 5) {
      while(roda >=3 && roda <= 5) {
       roda = aleatorio();
      }
    }else if (roda === 6 || roda === 7) {
      while(roda === 6 || roda === 7) {
       roda = aleatorio();
      }
    }else if (roda === 8 || roda === 9) {
      while(roda === 8 || roda === 9) {
       roda = aleatorio();
      }
    }
    selecionaPalavra.className += ` ${estilo[roda]}`;
    /*
    if (roda === 1) {
      selecionaPalavra.className = `${estilo[0]}`;
    }
    if (roda === 2) {
      selecionaPalavra.className = `${estilo[1]}`;
    }
    if (roda === 3) {
      selecionaPalavra.className = `${estilo[2]}`;
    }
    */
  }
}

function tamanhoPalavra(tl2) {
  let roda2;
  const tamanho = ['medium', 'big', 'reallybig'];
  for (let i = 0; i < tl2; i += 1) {
    const selecionaPalavra2 = document.getElementsByTagName('span')[i];
    roda2 = aleatorio();
    if (roda2 === 1) {
      selecionaPalavra2.className += ` ${tamanho[0]}`;
    }
    if (roda2 === 2) {
      selecionaPalavra2.className += ` ${tamanho[1]}`;
    }
    if (roda2 === 3) {
      selecionaPalavra2.className += ` ${tamanho[2]}`;
    }
  }
}

function rotacaoPalavra(tl3) {
  let roda3;
  const rotacao = ['rotateleft', 'rotateright'];
  for (let i = 0; i < tl3; i += 1) {
    const selecionaPalavra3 = document.getElementsByTagName('span')[i];
    roda3 = aleatorio();
    if (roda3 > 2) {
      roda3 = aleatorio();
    }
    if (roda3 === 1) {
      selecionaPalavra3.className += ` ${rotacao[0]}`;
    }
    if (roda3 === 2) {
      selecionaPalavra3.className += ` ${rotacao[1]}`;
    }
  }
}

function inclinacaoPalavra(tl4) {
  let roda4;
  const inclinacao = ['skewleft', 'skewright'];
  for (let i = 0; i < tl4; i += 1) {
    const selecionaPalavra4 = document.getElementsByTagName('span')[i];
    roda4 = aleatorio();
    if (roda4 > 2) {
      roda4 = aleatorio();
    }
    if (roda4 === 1) {
      selecionaPalavra4.className += ` ${inclinacao[0]}`;
    }
    if (roda4 === 2) {
      selecionaPalavra4.className += ` ${inclinacao[1]}`;
    }
  }
}

function separaPalavras() {
  const palavraPorPalavra = textoCarta.value.split(' ');
  const textLength = palavraPorPalavra.length;
  for (let i = 0; i < textLength; i += 1) {
    cartaGerada.innerHTML += `<span>${palavraPorPalavra[i]}`;
  }
  cartaContador.innerHTML = `${textLength}`;
  estilizaPalavra(textLength);
  //tamanhoPalavra(textLength);
  //rotacaoPalavra(textLength);
  //inclinacaoPalavra(textLength);
}

botaoCarta.addEventListener('click', separaPalavras);
