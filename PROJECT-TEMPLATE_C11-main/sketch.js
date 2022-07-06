var mar,barco,mar_em_movimento,barco_navegando;
function preload(){
barco_navegando = loadAnimation("ship-1.png","ship-2.png"); 
mar_em_movimento = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(100,200,10,10);
  barco = createSprite(200,240,10,10);
  mar.addImage (mar_em_movimento);
  barco.addAnimation("navegando",barco_navegando);
  barco.scale = 0.4;

  mar.scale = 0.4;
  mar.velocityX = 1;
}

function draw() {
  background("blue");
  if(mar.x < 0 ){
    mar.x = mar.width/2;
  }
  
    drawSprites();

 
}
