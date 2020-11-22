var wall,car;
var speed,weight;
var deform;
var state = "play";

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 210, 200, 50);

  wall = createSprite(1500,200,60,height);
  wall.shapeColor = 80,80,80;

}

function draw() {
  background(255,255,255); 

if(state==="play") {
  speed = Math.round(random(55,90));
  weight =  Math.round(random(400,1500));
  car.velocityX = speed;

if(wall.x-car.x<wall.width/2+car.width/2) {
  car.velocityX=0;
  deformation = Math.round(0.5*weight*speed*speed/23509);
   
  if(deformation>=180) {
  car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>=100) {
    car.shapeColor=color(230,230,0);
    type="destroyed";
  }

  if(deformation<80) {
    car.shapeColor=color(0,255,0);
    type="small accident";
  }
  state="end";
}
}

if(state==="end") {

  if(deformation>=180) { 
    fill(255,0,0);
  }

  if(deformation<180 && deformation>=80) {
    fill(230,230,0);
  }

  if(deformation<80) {
    fill(0,255,0);
  }

  textSize(25);
  text("Speed: "+speed+"km/h",100,100);
  text("Weight: "+weight+"kg",100,150);
  text("Deformation: "+deformation,100,200);

  textSize(30);
  text("type: "+type,100,250);

  text("Press 'R' to reset",100,50);
  if(keyDown("r")) {
    reset();
  }
}

drawSprites();
}

function reset() {
state="play";
car.x=50;
car.shapeColor=color(127,127,127);
}