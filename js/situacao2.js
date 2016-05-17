var situacao2_pacote1 = 25;
var situacao2_pacote2 = 125;

function mover_situ2() {
    situacao2_pacote1+=1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem3, situacao2_pacote1, 150, 40, 40);
    context.drawImage(imagem2, 125, 140, 96, 64);
    if(situacao2_pacote1>=130){
      stop();
      timer = setInterval(mover2_situ2,P);
    }
}

function mover2_situ2() {
  situacao2_pacote2+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==2){context.drawImage(imagem2, situacao2_pacote2, 140, 96, 64);}
  if(situacao2_pacote2>=canvas.width-200)
  {
    stop();
    timer = setInterval(mover3_situ2, 1);
  }
}

function mover3_situ2(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, situacao2_pacote2, 140, 96, 64);
  context.drawImage(imagem3, canvas.width-50, 150, 40, 40);
  stop();
}
