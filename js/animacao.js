var x = 30;
var y = 58;
var timer;

function mover() {
    x+=1;
    context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height-50);
    context.drawImage(imagem2, x, y, 64, 32); //Desenha de novo

    if(x>=canvas.width-100)
    {
      stop();
    }
}

function resetar() {
  x=30;
  y=58;
  context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height-50);
  context.drawImage(imagem2, x, y, 64, 32); //Desenha de novo
}

function play(){
  timer = setInterval(mover,10);
}

function stop(){
  clearInterval(timer);
}

