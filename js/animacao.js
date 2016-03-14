var x = 100;
var y = 116;
var z = 25;
var w = 500;
var timer;

function mover() {
    z+=1;
    context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem2, x, y, 96, 64); //Desenha de novo
    context.drawImage(imagem3, z, 130, 40, 40); //Desenha de novo
    if(z>=100){
      x+=1;
      context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
      context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
      context.drawImage(imagem2, x, y, 96, 64); //Desenha de novo
      if(x>=canvas.width-200)
      {
        x=canvas.width-200;
        w+=1;
        context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
        context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
        context.drawImage(imagem2, x, y, 96, 64); //Desenha de novo
        context.drawImage(imagem3, w, 130, 40, 40); //Desenha de novo
        if(w>=canvas.width-50){
          stop();
        }
      }
    }
}

function resetar() {
  x=100;
  y=116;
  z=25;
  w=500;
  context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, x, y, 96, 64); //Desenha de novo
  context.drawImage(imagem3, z, 130, 40, 40); //Desenha de novo
}

function play(){
  timer = setInterval(mover,10);
}

function stop(){
  clearInterval(timer);
}
