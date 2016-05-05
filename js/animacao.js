var timer;

function mover() {
  if(situ==1){
    timer = setInterval(mover_situ1,T);
  } else if(situ==2){
    timer = setInterval(mover_situ2,T);
  }
}

function resetar() {
  stop();
  situacao1_pacote1 = 25;
  situacao1_pacote2 = 200;
  situacao1_pacote3 = 530;

  situacao2_pacote1 = 25;
  situacao2_pacote2 = 100;
  situacao2_pacote3 = 500;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==2){
    context.drawImage(imagem2, situacao2_pacote2, 116, 96, 64);
  }
  context.drawImage(imagem3, situacao1_pacote1, 130, 40, 40);
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

    imagem2.src= 'img/pacote.png';

    imagem2.onload = function() {
      context.drawImage(imagem2, 25, 130, 40, 40);
    }

    imagem3.src= 'img/pacote.png';

    imagem3.onload = function() {
      context.drawImage(imagem3, 25, 130, 40, 40);
    }
  }

  if(situ==2){
    imagem.src = 'img/cenario2.png';

    imagem.onload = function() {
      context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    }

    imagem2.src= 'img/caminhao.png';

    imagem2.onload = function() {
      context.drawImage(imagem2, 100, 116, 96, 64);
    }

    imagem3.src= 'img/pacote.png';

    imagem3.onload = function() {
      context.drawImage(imagem3, 25, 130, 40, 40);
    }
  }
}
