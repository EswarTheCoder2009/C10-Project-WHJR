var sea, seaImage;
var ship, shipSailing;

function preload() {
  seaImage = loadImage("sea.png");
  shipSailing = loadAnimation("ship-1.png", "ship-2.png");
}

function setup() {
  createCanvas(800, 330);
  sea = createSprite(400, 165);
  sea.addImage("sea", seaImage);
  sea.scale = 0.2;
  ship = createSprite(90, 125);
  ship.addAnimation("sailing", shipSailing);
  ship.scale = 0.25;
}

function draw() {
  sea.velocityX = -10;
  if(sea.x < 0){
    sea.x = sea.width / 10;
  }
  drawSprites();
}