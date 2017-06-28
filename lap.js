//pruebas
//eduardo urbina
//esta es una plantilla para proyecto de coded
//fill(random(0,255),random(0,255),random(0,255)); reacordatorio
var x = [];
var y = [];
var diam = [];
var estrellas = 100;
var mouse;
//variables

function setup(){
  createCanvas(1000,600);
  for (var i = 0; i < estrellas; i++) {
    x[i] = random(0,width);
    y[i] = random(0,height);
    diam[i] = random(1,10);
    mouse=(random(mouseX,mouseY));
  }
  //variables con arreglos
}

function draw(){
  background(30);
    for (var i = 0; i < estrellas; i++) {
    noStroke();
    //que las "estrellas" no tengan borde aun que se podria poner uno blanco y ser relleno negro?
    fill(random(230,241));
    ellipse(x[i],y[i],diam[i],diam[i]);
    // representancion de circulos como estrellas
  }
  frameRate(50);
  //velocidad para el mouse para que sea comodo
  triangle(mouseX+7,mouseY+29,mouseX,mouseY,mouseX+24,mouseY+19);
  //triangulo representando nave
}
//pd:comentarios para acostumbrarme
//no e tenido mucho tiempo 
