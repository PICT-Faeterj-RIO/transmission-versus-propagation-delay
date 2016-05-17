var situacao1_pacote1 = 25;
var situacao1_pacote2 = 242;
var situacao1_pacote3 = 650;
var situacao1_pacote4 = 200;

function mover_situ1() {
    situacao1_pacote1+=1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem3, situacao1_pacote1, 145, 40, 40);
    context.drawImage(roteador, 140, 112, 120, 100);
    context.drawImage(roteador, 550, 112, 120, 100);
    if(situacao1_pacote1>=200){
      stop();
      timer = setInterval(mover2_situ1,T);
    }
}

function mover2_situ1() {
  situacao1_pacote4+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem3, situacao1_pacote4, 145, 40, 40);
  context.drawImage(roteador, 140, 112, 120, 100);
  context.drawImage(roteador, 550, 112, 120, 100);
  context.drawImage(setatrans, 170, 50, 150,100);
  if(situacao1_pacote4>=242){
    stop();
    timer = setInterval(mover3_situ1,P);
  }
}

function mover3_situ1() {
  situacao1_pacote2+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, situacao1_pacote2, 145, 40, 40);
  context.drawImage(roteador, 140, 112, 120, 100);
  context.drawImage(roteador, 550, 112, 120, 100);
  context.drawImage(setaprop, 300, 50, 150,100);
  if(situacao1_pacote2>=canvas.width-270)
  {
    stop();
    timer = setInterval(mover4_situ1,1);
  }
}

function mover4_situ1(){
  situacao1_pacote3+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem3, situacao1_pacote3, 145, 40, 40);
  context.drawImage(roteador, 140, 112, 120, 100);
  context.drawImage(roteador, 550, 112, 120, 100);
  if(situacao1_pacote3>=canvas.width-50){
    stop();
  }
}
