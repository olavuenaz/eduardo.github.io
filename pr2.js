// proyecto
// eduardo urbina
// aplicacion de conceptos aprendidos

var Meteoritos=[];
// variable con arreglos
var nave;
function setup(){
createCanvas(1000,600);
//canvas (hoja)
for(var i=0;i<20;i++){
Meteoritos[i] = new Meteorito();
//aplicacion de arreglo con un constructor
}
//nave = new Nave(mouseX+10,mouseY+27,mouseX,mouseY,mouseX+22,mouseY+20);
// tuve algunos problemas con la nave
}

function draw(){
background(0);
//triangle(mouseX+10,mouseY+27,mouseX,mouseY,mouseX+22,mouseY+20);
for(var i=0;i< Meteoritos.length;i++){
  Meteoritos[i].move();
  Meteoritos[i].display();
  //arreglo con constructor y funcion
}
//nave.Nave();
}

function Meteorito(){
  this.x = random(0,width);
  this.y = random(0,height);
  //diseño de lo que construlle el constructor

  this.display = function() {
    stroke(255);
    //borde
    frameRate(30);
    noFill();
    ellipse(this.x,this.y,50,50);
    //figura de la funcion
  }

  this.move = function() {
    this.x =this.x + random(-17,17);
    this.y =this.y + random(-17,17);
    // lo que hace
  }
}

/*function Nave(){
this.lado1 = mouseX+10;
this.lado2 = mouseY+27;
this.lado3 = mouseX;
this.lado4 = mouseY;
this.lado5 = mouseX+22;
this.lado6 = mouseY+20;
triangle(this.lado1,this.lado2,this.lado3,this.lado4,this.lado5,this.lado6);
prueba para crear la nave
}*/
