var situacao2_pacote1 = 25;
var situacao2_pacote2 = 100;
var situacao2_pacote3 = 500;

function mover_situ2() {
    situacao2_pacote1+=1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem2, 100, 116, 96, 64);
    context.drawImage(imagem3, situacao2_pacote1, 130, 40, 40);
    if(situacao2_pacote1>=100){
      stop();
      timer = setInterval(mover2_situ2,P);
    }
}

function mover2_situ2() {
  situacao2_pacote2+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==2){context.drawImage(imagem2, situacao2_pacote2, 116, 96, 64);}
  if(situacao2_pacote2>=canvas.width-200)
  {
    stop();
    timer = setInterval(mover3_situ2,T);
  }
}

function mover3_situ2(){
  situacao2_pacote2=canvas.width-200;
  situacao2_pacote3+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, situacao2_pacote2, 116, 96, 64);
  context.drawImage(imagem3, situacao2_pacote3, 130, 40, 40);
  if(situacao2_pacote3>=canvas.width-50){
    stop();
  }
}
