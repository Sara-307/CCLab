let currentScene = "main"; 
let storeX, storeY;
let sound;
let Xspeed = 2;
let Yspeed = 1.5;
let x = 50;
let y = 335;
let x1 = 270;
let y1 = 330;
let x2 = 510;
let y2 = 330;
let x3 = 740;
let y3 = 340;
let button1Visible = true;
let button2Visible = true;
let pass1 = false;
let pass2 = false;
//scene1
let flowerx = [100, 500, 650,550,300]; //花
let flowery = [0, -500, -280,-830,-1100];
let flowerSpeed = 1.2;
let numFlowerCollected = 0;
let berryx=[400,300,80,600]; //果
let berryy = [-130,-570,-730,-1130];
let berrySpeed = 1;
let numBerryCollected = 0;
let BerryEnd=false;
let returnForest = false;
let s=0.8;
//scene2
let footprints = [];
let vineX1;
let vineY1;
let vineTrail = []; 
let circleTrail = []; 
let yspeed2 = 1; //creature movement 
let triggerScene2 = false;
let stage = 0;
let x31=180;
let x32=330;
let startColor;
let endColor;
let lerpedColor;

function setup() {
  let canvas=createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  vineX1 = x - 50;
  vineY1 = 150;
  vineX2 = x - 50; 
  vineY2 = 375;
  startColor = color(242, 242, 242,150);
  endColor = color(153, 204, 0,220);
  textStyle(BOLD);
  textFont('Courier New', 15);
}

function draw() {
  background(0);
  for (let k = 20; k < 800; k += 210) {
    stroke(0, 26, 0);
    fill(0, 26, 0);
    rect(k, 0, 40, 399); //tree bg
    beginShape();
    curveVertex(k + 40, 250);
    curveVertex(k + 40, 250);
    curveVertex(k + 75, 220);
    curveVertex(k + 40, 270);
    curveVertex(k + 40, 270);
    endShape(); //branch
  }
  for (let i = 70; i < 800; i += 320) {
    stroke(0, 51, 17);
    fill(0, 51, 17);
    rect(i, 0, 50, 399); //tree1-bg
    beginShape();
    curveVertex(i, 100);
    curveVertex(i, 100);
    curveVertex(i - 40, 50);
    curveVertex(i, 120);
    curveVertex(i, 120);
    endShape(); //branch
    beginShape();
    curveVertex(i + 50, 200);
    curveVertex(i + 50, 200);
    curveVertex(i + 80, 170);
    curveVertex(i + 50, 215);
    curveVertex(i + 50, 215);
    endShape(); //branch
  }
  for (let j = 230; j < 800; j += 350) {
    stroke(0, 77, 26);
    fill(0, 77, 26);
    rect(j, 0, 40, 399); //tree2-bg
    beginShape();
    curveVertex(j + 40, 150);
    curveVertex(j + 40, 150);
    curveVertex(j + 75, 120);
    curveVertex(j + 40, 170);
    curveVertex(j + 40, 170);
    endShape(); //branch
    beginShape();
    curveVertex(j, 230);
    curveVertex(j, 230);
    curveVertex(j - 30, 190);
    curveVertex(j, 255);
    curveVertex(j, 255);
    endShape(); //branch
  }
  fill(255, 245, 204);
  rect(0, 400, 800, 100);
  stroke(139, 204, 0);
  fill(139, 204, 0);
  rect(0, 400, 800, 20); //road

  if (button1Visible) {
    fill(242, 180);
    stroke(242, 180);
    rect(width / 2 - 232, height / 2 - 160, 464, 160, 10);
    fill(0);
    textSize(15);
    text(
      "The little creature woke up and lost her memory",
      width / 2 - 227,
      height / 2 - 130
    );
    text(
      "Please help her find her memory through exploration",
      width / 2 - 227,
      height / 2 - 105
    );
    square(width / 2 - 95, height / 2 - 90, 23);
    square(width / 2 - 95, height / 2 - 65, 23);
    square(width / 2 - 120, height / 2 - 65, 23);
    square(width / 2 - 70, height / 2 - 65, 23);
    fill(0);
    text("Press these keys to", width / 2 - 10, height / 2 - 75);
    text("let the creature move!", width / 2 - 10, height / 2 - 50);
    fill(139, 204, 0, 200);
    rect(width / 2 - 30, height / 2 - 35, 60, 30);
    fill(255);
    text("w", width / 2 - 88, height / 2 - 75);
    text("s", width / 2 - 88, height / 2 - 50);
    text("a", width / 2 - 113, height / 2 - 50);
    text("d", width / 2 - 63, height / 2 - 50);
    textSize(18);
    text("start", width / 2 - 27, height / 2 - 15);
  }

  if (keyIsPressed == true) {
    if (key == "d" && x + 50 < width) {
      x += Xspeed;
    } else if (key == "a" && x - 50 > 0) {
      x -= Xspeed;
    }
    if (key == "w") {
      y -= Yspeed;
    } else if (key == "s" && y + 65 < 420) {
      y += Yspeed;
    }
  }
  //Check the current scene and draw accordingly
  if (currentScene === "main") {
    drawCreature();
    drawPlant1();
    drawPlant2();
    drawMemory();
  } else if (currentScene === 1) {
    drawScene1();
  } else if (currentScene === 2) {
    drawScene2();
  } else if (currentScene === 3){
    drawScene3();
  }
}
function drawCreature() {
  push();
  translate(x,y)
  scale(s);
  fill(0, 153, 51);
  stroke(0, 153, 51);
  triangle(- 40, - 41, - 50, - 65, - 30, - 53);
  triangle(40, - 41, 50, - 65,  30, - 53);
  if(stage<2){
  fill(242, 242, 242, 150);
  stroke(255, 80);
  } else if(stage==2){
  lerpedColor = lerpColor(startColor, endColor, map(x, x31, 700, 0, 1));
  fill(lerpedColor);
  stroke(lerpedColor);
  } else{
  fill(153, 204, 0, 120);
  stroke(153, 204, 0, 80);
  }
  ellipse(0, 0, 100, 130); //body(transparent)
  fill(0, 153, 51);
  stroke(0, 153, 51);
  ellipse(0, - 10, 44, 58); //eye(green)
  fill(252, 233, 29);
  beginShape();
  vertex(0, - 35);
  vertex(- 12, - 10);
  vertex(0, 15);
  vertex(12, - 10);
  endShape(CLOSE);
  pop();
}

function mousePressed() {
  let d1 = dist(mouseX, mouseY, width / 2 , height / 2 - 20);
  if (d1 < 40) {
    button1Visible = false;
  }
  let d2 = dist(mouseX,mouseY,width/2-40,height/2+120);
  if(d2 < 50) {
   button2Visible = false;
  }
}

function drawPlant1() {
  push();
  translate(x1, y1);
  scale(0.45);
  for (let n = 0; n < 10; n++) {
    rotate(PI / 5);
    drawSingleFlower(-50, -50);
  }
  pop();
  fill(255);
  if (dist(x, y, x1, y1) < 70) {
    text("Press '1' to enter", x1 - 55, y1 - 40);
  }
}

function drawPlant2() {
  drawLily(x2,y2+70);
  if (dist(x, y, x2, y2) < 70) {
    fill(255);
    if(pass1==true){
    text("Press '2' to enter", x2 - 80, y2 - 30);
      }else{
    text("Need more memories to enter",x2 - 100, y2 - 30)}
  }
}

function drawMemory() {
  push()
  translate(x3,y3);
  rotate(PI/12);
  fill(255,180)
  rect(-30,-15,60,38);
  line(-30,-15,0,0);
  line(30,-15,0,0);
  fill(0, 153, 51)
  circle(0, 0, 10);
  pop()
  if (dist(x, y, x3, y3) < 60) {
    fill(255);
    if(pass2==true){
    text("Press '3' to open", x3 - 130, y3 - 30);
    }else{
      text("Need more memories to enter",x3 - 220, y3 - 30)
    }
  }
}

function keyPressed() {
  // Update the current scene based on the pressed key
  if (key == "1") {
    currentScene = 1;
  } else if (key == "2"&& pass1==true) {
    currentScene = 2;
    triggerScene2 = true;
    if (triggerScene2 == true) {
      x = 0;
    }
  } else if (key == "3"&& pass2==true){
    currentScene = 3;
  } else if (key == "m" || key == "M") {
    currentScene = "main";
  }
}

function drawScene1() {
  background(0, 77, 0);
  for (let x1 = 20; x1 < 780; x1 += 40) {
    for (let y1 = 20; y1 < 480; y1 += 40) {
      fill(252, 233, 29);
      stroke(252, 233, 29);
      circle(x1, 20, 3);
      circle(20, y1, 3);
      circle(780, y1, 3);
    }
  }
  fill(255, 245, 204);
  rect(0, 400, 800, 100);
  stroke(139, 204, 0);
  fill(139, 204, 0);
  rect(0, 400, 800, 20);
  drawCreature();
  //flower
  for (let i = 0; i < flowerx.length; i++) {
      drawFlowers();
      flowery[i] += flowerSpeed;
  }
  
// Check collision with flowers
  for (let i = flowerx.length-1; i>=0; i--) {
    let d3=dist(x,y,flowerx[i],flowery[i]);
    if (d3<60*s) {              
      flowerx.splice(i, 1); //Remove from the array
      flowery.splice(i, 1);
      numFlowerCollected++;
    }
  }
  //berry
  for (let i = 0; i < berryx.length; i++) {
    berryy[i] += berrySpeed;
      drawBerries();
  }

// Check collision with berries
  for (let i = 0; i < berryx.length; i++) {
    let d4=dist(x,y,berryx[i],berryy[i]);
    if (d4<60*s) {  
      storeX=berryx[i]
      storeY=berryy[i]
      console.log(storeX)
      berryx.splice(i, 1); //Remove from the array
      berryy.splice(i, 1);
      numBerryCollected++;
    }
  }
    if(berryx.length > 0){
    storeX = berryx[berryx.length -1];
    storeY = berryy[berryy.length -1];
  }
  s = map((numFlowerCollected+numBerryCollected),0, 8, 0.8, 1.3);
  console.log(dist(x,y,storeX,storeY));
  if(dist(x,y,storeX,storeY)<60*s || storeY>height){
  fill(255,180);
  rect(width/2-300,height/2-100,600,150,10);
  fill(139, 204, 0)
  rect(width/2-50,height/2-40,100,50)
  fill(0)
  text("The forest bestows upon us countless treasures",width/2-285,height/2-75);
  text("it's time to return what we've taken.",width/2-285,height/2-55);
  text("RETURN",width/2-32,height/2);
  }
  pass1=true;
}

function drawScene2() {
  if(button2Visible){
  background(0, 77, 0);
  stroke(255)
  for(let i=0; i<100; i++){
    let X1 = random(width);
    let Y1 = random(height);
    let X2 = random(width);
    let Y2 = random(height);
    line(X1,Y1,X2,Y2);
  }
  fill(255,180);
  rect(width/2-355,height/2-50,710,50,5);
  fill(139, 204, 0);
  stroke(139, 204, 0);
  rect(width/2-45,height/2+120,90,50);
  fill(0);
  stroke(255);
  text("The little creature vaguely recalled some fragments of memories...",width/2-353,height/2-25)
  fill(255)
  text("continue",width/2-42,height/2+150)
  stage=1; 
  } else if (stage==1) {
  background(38, 86, 16);
  fill(139, 204, 0);
  rect(0,420,800,80);
  rect(0,0,800,80);
  fill(0, 77, 26);
  rect(0,400,800,20);
  rect(0,80,800,20);
  drawLily(180,490);
  drawLily(420,490);
  drawLily(650,490);
  drawLily(180,80);
  drawLily(420,80);
  drawLily(650,80);
  push();
  scale(0.7);
  drawCreature();
  drawFootprint();
  pop();
  x = x + 2;
  y = y + yspeed2;
  if (y < 265 || y > 410) {
    yspeed2 = yspeed2 * -1;
  }

  drawCircleTrail()
  vineX1 = vineX1 + 1.7; 
  vineY1 = 125 + sin(vineX1 * 0.03) * 15;
  vineTrail.push(createVector(vineX1, vineY1)); 
  if (vineTrail.length > 100) {
    vineTrail.shift();
  }
  circleTrail.push(createVector(vineX1, vineY1)); 
   }
  if(x>width+300){
  stage=2; 
  x=50; 
  y=335;
  }
  if(stage==2){
  fill(255, 245, 204);
  rect(0, 400, 800, 100);
  stroke(139, 204, 0);
  fill(139, 204, 0);
  rect(0, 400, 800, 20);//road
  drawCreature();
  beginShape();
  fill(255, 255, 204, 100);
  stroke(255, 255, 204,70);
  vertex(10,0);
  vertex(10,0);
  vertex(x31,400); //x31left 180
  vertex(x32,400); //x32right 330
  vertex(x32*0.3,0);
  vertex(x32*0.3,0);
  endShape();
  x31-=0.2;
  x32+=0.8;
  x=x+Xspeed*0.4;
  pass2=true;
  if(x>width){
  stage=3;
    }
  }else if(stage==3){
  fill(0);
  text("Press 'm' to return to the main interface",width/2-200,450)      
  }
}

function drawScene3(){
  fill(255,180);
  rect(width / 2 - 320, height / 2 - 220, 640, 350, 10);
  fill(0);
  stroke(0,200);
  text("In the forest, life thrived before,",width / 2 - 310,height / 2 - 200);
  text("but it was destroyed by a cruel twist of fate.",width / 2 - 310,height / 2 - 170);
  text("A lone survivor, returning it all,",width / 2 - 310,height / 2 - 140);
  text("Awakens her memories of the past.",width / 2 - 310,height / 2 - 110);
  text("Emerald form in the sun's warm glow,",width / 2 - 310,height / 2 - 80);
  text("Pass by her lost home.",width / 2 - 310,height / 2 - 50);
  text("As the forest heals, new life unfolds, ",width / 2 - 310,height / 2 - 20);
  text("Under the endless sky, the story retold.",width / 2 - 310,height / 2 +10);
  text("the end",width / 2 - 22,height / 2 + 70);
  push();
  x=600;
  y=180;
  drawCreature();
  translate(x+35,y+5);
  scale(0.5);
  drawSingleFlower(0,0);
  pop();
}

function drawFlowers() {//multiple
 for(let i =0; i<flowerx.length; i++){
    drawSingleFlower(flowerx[i],flowery[i]);
  }
}

function drawSingleFlower(x, y) {//one
  push();
  translate(x, y);
  scale(0.4);
  push(); //green leaves1
  rotate(PI / 4);
  for (let j = 0; j < 4; j++) {
    stroke(153, 204, 0);
    fill(153, 204, 0);
    beginShape();
    curveVertex(-10, -40);
    curveVertex(-10, -40);
    curveVertex(0, -70);
    curveVertex(10, -40);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape(CLOSE);
    rotate(PI / 2);
  }
  pop(); //end of green leaves 1

  for (let k = 0; k < 8; k++) {
    stroke(0, 153, 51);
    fill(0, 153, 51);
    beginShape();
    curveVertex(-12, -35);
    curveVertex(-12, -35);
    curveVertex(0, -60);
    curveVertex(12, -35);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape(CLOSE);
    rotate(PI / 3);
  } //green leaves 2

  push();
  rotate(PI / 8);
  for (let l = 0; l < 8; l++) {
    stroke(252, 233, 29);
    fill(252, 233, 29);
    beginShape();
    curveVertex(-8, -24);
    curveVertex(-8, -24);
    curveVertex(0, -40);
    curveVertex(8, -24);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape(CLOSE);
    rotate(PI / 4);
  }
  pop(); //yellow petal

  for (let m = 0; m < 8; m++) {
    stroke(255);
    fill(255);
    beginShape();
    curveVertex(-8, -24);
    curveVertex(-8, -24);
    curveVertex(0, -40);
    curveVertex(8, -24);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape(CLOSE);
    rotate(PI / 4);
  }
  pop();
}

function drawBerries(){
  for(let i =0; i<berryx.length; i++){
    drawSingleBerry(berryx[i],berryy[i])
  }
}

function drawSingleBerry(x,y) {
  push();
  translate(x + 5, y);
  fill(139, 204, 0);
  stroke(139, 204, 0);
  beginShape();
  curveVertex(-10, -4);
  curveVertex(-10, -4);
  curveVertex(-20, -10);
  curveVertex(-9, -12);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);
  rotate((PI / 3) * -1);
  beginShape();
  curveVertex(10, -4);
  curveVertex(10, -4);
  curveVertex(20, -10);
  curveVertex(9, -12);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);
  fill(179, 0, 0);
  stroke(179, 0, 0);
  circle(7, 5, 13);
  fill(231, 61, 19);
  stroke(231, 61, 19);
  circle(0, 0, 15);
  pop();
}

function drawLily(xl,yl){
  strokeWeight(1);
  stroke(0, 153, 51);
  fill(0, 153, 51);
  push(); //outer
  translate(xl,yl);
  push(); //inner
  rotate((PI / 6) * -1);
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(-8, -25);
  curveVertex(-0, -60);
  curveVertex(8, -25);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  rotate(PI / 3);
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(-10, -30);
  curveVertex(-0, -70);
  curveVertex(10, -30);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
  pop(); //end of inner
  noFill();
  strokeWeight(2);
  beginShape();
  curveVertex(0,0);
  curveVertex(0, 0);
  curveVertex(- 2, -30);
  curveVertex(- 8, -65);
  curveVertex(- 25, -80);
  curveVertex(- 50, -85);
  curveVertex(- 50, -85);
  endShape();
  for (i = 0; i < 2; i++) {
    fill(255, 220);
    stroke(255, 120);
    rect(- 60 + i * 24, -85 + i * 5, 15, 17, 5);
    circle(- 60 + i * 24, -67 + i * 5, 5);
    circle(- 53 + i * 24, -67 + i * 5, 5);
    circle(- 46 + i * 24, -67 + i * 5, 5);
  }
  pop(); //out
}

function drawFootprint() {
  for (let i = 0; i < footprints.length; i++) {
    fill(252, 233, 29);
    stroke(252, 233, 29);
    let footprintShape = footprints[i].shape;
    if (footprintShape === "circle") {
      fill(0, 153, 51)
      stroke(0, 153, 51)
      ellipse(footprints[i].x-70, footprints[i].y, 20, 20);
      fill(255, 255, 153);
      stroke(255, 255, 153);
      ellipse(footprints[i].x-78, footprints[i].y-30, 5, 5);
      ellipse(footprints[i].x-55, footprints[i].y+15, 7, 7);
    } else if (footprintShape === "diamond") {
    fill(252, 233, 29);
    stroke(252, 233, 29);
    beginShape();
    vertex(footprints[i].x -70, footprints[i].y - 20);
    vertex(footprints[i].x - 85, footprints[i].y );
    vertex(footprints[i].x -70 , footprints[i].y + 20);
    vertex(footprints[i].x - 55, footprints[i].y );
    endShape(CLOSE);
    } else if (footprintShape === "triangle") {
      fill(255);
      stroke(255);
      triangle(
        footprints[i].x-70,
        footprints[i].y - 12,
        footprints[i].x - 85,
        footprints[i].y + 18,
        footprints[i].x -55,
        footprints[i].y + 18
      );
    }
  }
  if(footprints.length === 0 || x - footprints[footprints.length - 1].x >= 20) {
    let newFootprintShape = random(["circle", "diamond", "triangle"]);
    footprints.push({ x: x, y: y, shape: newFootprintShape });
  }
}

function drawCircleTrail() {
  fill(0, 153, 51);
  stroke(0, 153, 51);
  beginShape();
  for (let i = 0; i < circleTrail.length; i++) {
    ellipse(circleTrail[i].x, circleTrail[i].y, 3, 3);
    ellipse(circleTrail[i].x, 500-circleTrail[i].y, 3, 3);
  }
  endShape();
  for(let i =50;i<800;i+=210){
    fill(255,0,0);
    stroke(255,0,0);
    circle(i,113,5);
    circle(i,387,5);
    fill(255);
    stroke(255);
    circle(i+105,130,5);
    circle(i+105,370,5);
  }
}
