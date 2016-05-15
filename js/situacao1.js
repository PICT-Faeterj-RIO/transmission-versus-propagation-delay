var situacao1_pacote1 = 25;
var situacao1_pacote2 = 200;
var situacao1_pacote3 = 550;
var situacao1_pacote4 = 120;

function mover_situ1() {
    situacao1_pacote1+=1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem3, situacao1_pacote1, 130, 40, 40);
    context.drawImage(roteador, 100, 98, 120, 100);
    context.drawImage(roteador, 450, 98, 120, 100);
    if(situacao1_pacote1>=120){
      stop();
      timer = setInterval(mover2_situ1,T);
    }
}

function mover2_situ1() {
  situacao1_pacote4+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem3, situacao1_pacote4, 130, 40, 40);
  context.drawImage(roteador, 100, 98, 120, 100);
  context.drawImage(roteador, 450, 98, 120, 100);
  context.drawImage(setatrans, 130, 40, 150,100);
  if(situacao1_pacote4>=200){
    stop();
    timer = setInterval(mover3_situ1,P);
  }
}

function mover3_situ1() {
  situacao1_pacote2+=1
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, situacao1_pacote2, 130, 40, 40);
  context.drawImage(roteador, 100, 98, 120, 100);
  context.drawImage(roteador, 450, 98, 120, 100);
  context.drawImage(setaprop, 250, 40, 150,100);
  if(situacao1_pacote2>=canvas.width-232)
  {
    stop();
    timer = setInterval(mover4_situ1,1);
  }
}

function mover4_situ1(){
  situacao1_pacote1=canvas.width-200;
  situacao1_pacote3+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem3, situacao1_pacote3, 130, 40, 40);
  context.drawImage(roteador, 100, 98, 120, 100);
  context.drawImage(roteador, 450, 98, 120, 100);
  if(situacao1_pacote3>=canvas.width-50){
    stop();
  }
}
