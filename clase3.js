var d = 90;     //Diametro de los circulos
var numX = 8;   //Cantidad de circulos en el eje horizontal
var numY = 5;   //Cantidad de circulos en el eje vertical
var rojo;       //Variable asociada al color rojo
var verde;      //Variable asociada al color verde
var azul;       //Variable asociada al color azul

function setup(){
  createCanvas(800,500);
}

function draw(){
  frameRate(17);
  background(100);
  for (var i = 0; i <= numX; i++) {
    for (var j = 0; j <= numY; j++) {
      rojo = random(0,255);
      verde = random(0,255);
      azul = random(0,255);

      fill(rojo, verde, azul, 150);
      ellipse(mouseX, mouseY, d, d);
    }
  }
}