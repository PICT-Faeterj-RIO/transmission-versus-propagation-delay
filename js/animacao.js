var x = 100;
var y = 116;
var z = 25;
var w = 500;
var timer;
var a = 200;
var b = 530;

function mover() {
    z+=1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    if(situ==2){context.drawImage(imagem2, x, y, 96, 64);}
    context.drawImage(imagem3, z, 130, 40, 40);
    if(z>=100){
      stop();
      timer = setInterval(mover2,P);
    }
}

function mover2() {
  x+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==1){a+=1; context.drawImage(imagem2, a, 130, 40, 40);}
  if(situ==2){context.drawImage(imagem2, x, y, 96, 64);}
  if(x>=canvas.width-200 || a>=canvas.width-220)
  {
    stop();
    timer = setInterval(mover3,T);
  }
}

function mover3(){
  x=canvas.width-200;
  w+=1;
  b+=1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==1){context.drawImage(imagem3, b, 130, 40, 40);}
  if(situ==2){
  context.drawImage(imagem2, x, y, 96, 64);
  context.drawImage(imagem3, w, 130, 40, 40);}
  if(w>=canvas.width-50 || b>=canvas.width-50){
    stop();
  }
}

function resetar() {
  stop();
  x=100;
  y=116;
  z=25;
  w=500;
  a=200;
  b=530;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(imagem, 0, 0, canvas.width, canvas.height);
  if(situ==2){context.drawImage(imagem2, x, y, 96, 64);}
  context.drawImage(imagem3, z, 130, 40, 40);
}

function stop(){
  clearInterval(timer);
}
