var situacao1_pacote1 = 25;
var situacao1_pacote2 = 200;
var situacao1_pacote3 = 530;

function mover_situ1() {
    situacao1_pacote1+=1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem3, situacao1_pacote1, 130, 40, 40);
    if(situacao1_pacote1>=100){
      stop();
      timer = setInterval(mover2_situ1,P);
    }
}

function mover2_situ1() {
  situacao1_pacote2+=1
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, situacao1_pacote2, 130, 40, 40);
  if(situacao1_pacote2>=canvas.width-220)
  {
    stop();
    timer = setInterval(mover3_situ1,T);
  }
}

function mover3_situ1(){
  situacao1_pacote1=canvas.width-200;
  situacao1_pacote3+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem3, situacao1_pacote3, 130, 40, 40);
  if(situacao1_pacote3>=canvas.width-50){
    stop();
  }
}