var backgroundimg, girl
function preload(){
  backgroundimg=loadImage("desert2.jpeg")
  girl=loadImage("runninggirl (1).jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  girl1=createSprite(20,displayHeight-20)
  girl1.addImage("runninggirl(1)",girl)
  girl1.scale=1;
  
}

function draw() {
  background(backgroundimg);  
  
  drawSprites();
}