//06-07-2017
//lluvia 2.0 new 2017
//ola vuenaz
// esto lo hice para autoconocimiento y aplicacion de terminos
var edificios=[];
var rectangulos;
var d=[];
var radio=75;
var mouse;
var circulo;
var luna;

function setup(){
  createCanvas(1000,600);
  for(var i=0;i<200;i++){
  d[i] = new Drop();
  }
  circulo = new Circulos();
  rectangulos = new calle();
  for(var j=0;j<4;j++){
    edificios[j]= new ciudad();
  }
  luna = new Luna();
}

function draw(){
  background(48,184,229);

  mouse = dist(mouseX,mouseY,900,100);
  if(radio/2>mouse){
      background(52,60,63);
        luna.lunallena();
      for(var j=0;j<4;j++){
        edificios[j].edificio1();
      }

  for(var i=0;i<200;i++){
  d[i].fall();
  d[i].show();
    }
  }
else{
  circulo.dibujo();
  for(var j=0;j<4;j++){
    edificios[j].edificio1();
  }
}
  rectangulos.rectangulo();
}

function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(random(0,255),random(0,255),random(0,255));
    line(this.x, this.y, this.x, this.y+this.len);
  }
}

function Circulos(){
  this.x1=900;
  this.y1=100;
  this.radio1=75;
  this.radio2=75;

  this.dibujo = function(){
    fill(231,242,016);
    noStroke();
    ellipse(this.x1,this.y1,this.radio1,this.radio2);
  }
}

function calle(){
  this.lado1=0;
  this.lado2=550;
  this.lado3=1000;
  this.lado4=50;

  this.rectangulo = function(){
    fill(100);
    noStroke();
    rect(this.lado1,this.lado2,this.lado3,this.lado4);
  }
}

function ciudad(){
this.lado1=random(100,900);
this.lado2=random(100,200);
this.lado3=150;
this.lado4=550;

  this.edificio1 = function(){
    noStroke();
    fill(220);
  rect(this.lado1,this.lado2,this.lado3,this.lado4);
  }
  this.ventanas = function (){

  }
}

 function Luna(){
 this.x2=900;
 this.y2=100;
 this.rad=70;
 this.rad=70;

  this.lunallena = function(){
    noStroke();
    fill(100);
   ellipse(this.x2,this.y2,this.rad,this.rad);
  }
 }
