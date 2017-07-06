//06-07-2017
//lluvia 2.0 new 2017
//ola vuenaz
// esto lo hice para autoconocimiento y aplicacion de terminos

var d=[];
var radio=75;
var mouse;
var circulo;
function setup(){
  createCanvas(1000,600);
  for(var i=0;i<200;i++){
  d[i] = new Drop();
  }
  circulo = new Circulos();
}

function draw(){
  background(100);
  circulo.dibujo();
  mouse = dist(mouseX,mouseY,900,550);
  if(radio/2>mouse){
  for(var i=0;i<200;i++){
  d[i].fall();
  d[i].show();
    }
  }
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
  this.y1=550;
  this.radio1=75;
  this.radio2=75;

  this.dibujo = function(){
    fill(120,144,255);
    noStroke();
    ellipse(this.x1,this.y1,this.radio1,this.radio2);
  }
}
