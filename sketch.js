let f= 200;
let fy= 200;
let bmbb;
let bmbba;
function preload(){
  bmbb= loadImage("bmbb.png");
  bmbba= loadImage("bmbba.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(circleHit(mouseX, mouseY, f, fy, 50)){
    	imageMode(CENTER);
  	image(bmbba, f, fy, bmbba.width/5, bmbba.height/5);
  } else {
    	imageMode(CENTER);
    image(bmbb, f, fy, bmbba.width/5, bmbba.height/5);
  }
}
  
  function circleHit(pX, pY, cX, cY, radius) {
let d = dist(pX, pY, cX, cY);
return (d <= radius);
}