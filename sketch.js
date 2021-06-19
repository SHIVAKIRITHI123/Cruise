var shipAnimation,seaImage,sea,ship
function preload(){
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(200,200)
 sea.addImage(seaImage)
 sea.scale = 0.3
 ship = createSprite(200,200)
 ship.addAnimation("s1",shipAnimation)
 ship.scale = 0.3
}

function draw() {
  background("blue");
 sea.velocityX = -2
 if(sea.x<0){
   sea.x = 200
 }
  drawSprites()
}