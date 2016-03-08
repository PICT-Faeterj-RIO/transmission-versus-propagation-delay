var x = 100;
var y = 116;
var timer;

function mover() {
    x+=1;
    context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    context.drawImage(imagem2, x, y, 96, 64); //Desenha de novo

    if(x>=canvas.width-200)
    {
      stop();
    }
}

function resetar() {
  x=100;
  y=116;
  context.clearRect(0, 0, canvas.width, canvas.height); //Limpa o canvas
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  context.drawImage(imagem2, x, y, 96, 64); //Desenha de novo
}

function play(){
  timer = setInterval(mover,10);
}

function stop(){
  clearInterval(timer);
}
