var transmissao;
var propagacao;
var T; var P;

function calcular()
{
  resetar();
  var pacote = document.getElementById("tampacote").value; //tamanho do pacote
  var velocidade = document.getElementById("vel").value; // velocidade transmissão
  var distancia = document.getElementById("dist").value; // distância total que o pacote irá percorrer
  var indice = 2 * 1E8; // índice de velocidade de propagação

  if(pacote=="Selecione um tamanho" || velocidade=="Selecione uma velocidade" || distancia=="Selecione uma distância"){
    alert("Um dos campos está vazio.");
    return;
  }

  //pega a posicao em que acaba a medida e corta a string
  var pospacote=posicao(pacote);
  var tampacote=pacote.substring(0,pospacote);
  //transforma o tamanho dos pacotes em bits
  if(pacote[pospacote+1]=='B'){
    tampacote=tampacote*8;
  }
  else{
    tampacote=tampacote*1E3*8;
  }

  //pega a posicao em que acaba a medida e corta a string
  var posvelocidade=posicao(velocidade);
  var velpacote=velocidade.substring(0,posvelocidade);
  //transforma a velocidade de transmissão em bits/seg
  if(velocidade[posvelocidade+1]=='K')
  {
    velpacote=velpacote*1E3;
  }
  else{
    velpacote=velpacote*1E6;
  }

  //transforma a distância de km para m
  distancia=distancia*1E3;

  transmissao=tampacote/velpacote;
  var trans_cien=converter(transmissao);

  propagacao=distancia/indice;
  var prop_cien=converter(propagacao);

  var atrasototal=transmissao+propagacao;
  var atrasototal_cien=converter(atrasototal);

  T = calcular_velocidade(transmissao);
  P = calcular_velocidade(propagacao);
  timer = setInterval(mover,T);

  document.getElementById('resultado').innerHTML="Atraso de transmissão: " + trans_cien + " segs ou " +
  transmissao + " segs. <br>" + "Atraso de propagação: " + prop_cien + " segs ou " + propagacao + " segs. <br>" +
  "Atraso total: " + atrasototal_cien + " segs ou " + atrasototal + " segs. <br>";
}

function posicao(pacote)
{
  var pos=0;
  for(var i=0; pacote[i]!=" "; i++)
  {
    pos++;
  }
  return pos;
}

function converter(pacote)
{
  var a = pacote.toString();
  var cont=1;
  for(var i=2; a[i]==0; i++){
    cont++;
  }
  var x = a.length-2;
  var b = a.substring(cont+1,a.length) + "x10^-" + x;

  return b;
}

function calcular_velocidade(atraso){
  var R = 1000 * atraso;
  return R;
}
