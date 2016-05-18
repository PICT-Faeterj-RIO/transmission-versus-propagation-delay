var timer;

function mover() {
  if(situ==1){
    timer = setInterval(mover_situ1,1);
  } else if(situ==2){
    timer = setInterval(mover_situ2,T);
  }
}

function resetar() {
  stop();
  situacao1_pacote1 = 25;
  situacao1_pacote2 = 242;
  situacao1_pacote3 = 650;
  situacao1_pacote4 = 200;

  situacao2_pacote1 = 25;
  situacao2_pacote2 = 125;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==2){
    context.drawImage(imagem2, situacao2_pacote2, 140, 96, 64);
    context.drawImage(imagem3, situacao2_pacote1, 150, 40, 40);
  } else if(situ==1){
    context.drawImage(roteador, 140, 112, 120, 100);
    context.drawImage(roteador, 550, 112, 120, 100);
    context.drawImage(imagem3, situacao1_pacote1, 145, 40, 40);
  }
}

function stop(){
  clearInterval(timer);
}

function mudar_situ(){
  if(situ==1){

    imagem.src = 'img/cenario1.png';

    imagem.onload = function() {
      context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    }

    imagem2.src= 'img/cartinha.png';

    imagem2.onload = function() {
      context.drawImage(imagem2, 25, 145, 40, 40);
    }

    imagem3.src= 'img/cartinha.png';

    imagem3.onload = function() {
      context.drawImage(imagem3, 25, 145, 40, 40);
    }

    imagem4.src= 'img/cartinha.png';

    roteador.src= 'img/roteador.png';

    roteador.onload = function() {
      context.drawImage(roteador, 140, 112, 120, 100);
      context.drawImage(roteador, 550, 112, 120, 100);
    }

    setaprop.src= 'img/prop.png';
    setatrans.src= 'img/transmissao.png';
  }

  if(situ==2){
    imagem.src = 'img/cenario2.png';

    imagem.onload = function() {
      context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    }

    imagem2.src= 'img/caminhao.png';

    imagem2.onload = function() {
      context.drawImage(imagem2, 125, 140, 96, 64);
    }

    imagem3.src= 'img/pacote.png';

    imagem3.onload = function() {
      context.drawImage(imagem3, 25, 150, 40, 40);
    }
  }
}
