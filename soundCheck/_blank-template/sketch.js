let kickSound;
function preload(){
  kickSound=loadSound("sounds/kick.mp3");
}
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
}
function draw() {
  background(220);
  circle(100,100,80);
  x+=xSpeed;
  if(x>width||x<0){
    xSpeed = -xSpeed;
  }
}
function mousePressed(){
  kickSound.play();
}








