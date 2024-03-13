let currentScene = 0; //variable:keep track of the scene
//interface
let Xspeed = 2;
let Yspeed = 1.5;
let x = 50;
let y = 335;
let x1 = 250;
let y1 = 330;
let x2 = 500;
let y2 = 330;
let x3 = 750;
let y3 = 340;
//boolean
let button1Visible = true;
let pass1 = false;
let pass2 = false;
//game1
let flowerx = [100, 500, 700]; //花
let flowery = [0, -700, -350];
let flowerSpeed = 1.3;
let berryx; //果
let berryy = -20;
let berrySpeed = 1;
let flowerState = [false, false, false];
//let state1 = false; //判断花
let state2 = false; //判断果
let numFlowerCollected = 0;

function setup() {
  let cnv=createCanvas(800, 500);
  cnv.parent("p5-canvas-container");
  //flowerx = random(50, width - 50);
  berryx = random(50, width - 50);
}

function draw() {
  background(0);
  fill(255, 245, 204);
  rect(0, 400, 800, 100);
  stroke(139, 204, 0);
  fill(139, 204, 0);
  rect(0, 400, 800, 20);
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
  if (currentScene === 0) {
    drawCreature();
    drawPlant1();
    drawPlant2();
    drawMemory();
  } else if (currentScene === 1) {
    drawScene1();
  } else if (currentScene === 2 && pass1 == true) {
    drawScene2();
  }
}

function drawCreature() {
  fill(0, 153, 51);
  stroke(0, 153, 51);
  triangle(x - 40, y - 41, x - 50, y - 65, x - 30, y - 53);
  triangle(x + 40, y - 41, x + 50, y - 65, x + 30, y - 53);
  fill(242, 242, 242, 150);
  stroke(255, 80);
  ellipse(x, y, 100, 130); //body(transparent)
  fill(0, 153, 51);
  stroke(0, 153, 51);
  ellipse(x, y - 10, 44, 58); //eye(green)
  fill(252, 233, 29);
  beginShape();
  vertex(x, y - 35);
  vertex(x - 12, y - 10);
  vertex(x, y + 15);
  vertex(x + 12, y - 10);
  endShape(CLOSE);
  strokeWeight(2);

  if (button1Visible) {
    //hints and button
    fill(242, 180);
    stroke(242, 180);
    rect(width / 2 - 225, height / 2 - 160, 450, 160, 10);
    fill(0);
    textSize(16);
    text(
      "The little creature woke up and lost her memory",
      width / 2 - 215,
      height / 2 - 130
    );
    text(
      "Please help her find her memory through exploration",
      width / 2 - 215,
      height / 2 - 105
    );
    square(width / 2 - 95, height / 2 - 90, 23);
    text("w", width / 2 - 90, height / 2 - 75);
    square(width / 2 - 95, height / 2 - 65, 23);
    text("s", width / 2 - 87, height / 2 - 50);
    square(width / 2 - 120, height / 2 - 65, 23);
    text("a", width / 2 - 113, height / 2 - 50);
    square(width / 2 - 70, height / 2 - 65, 23);
    text("d", width / 2 - 63, height / 2 - 50);
    text("Press these keys to", width / 2 - 10, height / 2 - 75);
    text("let the creature move!", width / 2 - 10, height / 2 - 50);
    fill(139, 204, 0, 200);
    rect(width / 2 - 25, height / 2 - 35, 50, 30);
    fill(255);
    textSize(18);
    text("start", width / 2 - 20, height / 2 - 15);
  }
}

function mousePressed() {
  let d1 = dist(mouseX, mouseY, width / 2 + 25, height / 2 - 25);
  if (d1 < 50) {
    button1Visible = false;
  }
}

function drawPlant1() {
  strokeWeight(1);
  fill(0, 153, 51);
  rect(x1, y1, 50, 50);
  fill(255);
  text("1", x1 + 25, y1 + 25);

  if (dist(x, y, x1, y1) < 70) {
    text("Press '1' to enter", x1 - 10, y1 - 30);
  }
}

function drawPlant2() {
  fill(0, 153, 51);
  rect(x2, y2, 50, 50);
  fill(255);
  text("2", x2 + 25, y2 + 25);

  if (dist(x, y, x2, y2) < 60) {
    text("Press '2' to enter", x2 - 10, y2 - 30);
  }
}

function drawMemory() {
  circle(x3, y3, 50);
  text("3", x3, y3);
  if (dist(x, y, x3, y3) < 60) {
    text("Press '3' to enter", x3 - 45, y3 - 30);
  }
}

function keyPressed() {
  // Update the current scene based on the pressed key
  if (key == "1") {
    currentScene = 1;
  } else if (key == "2") {
    currentScene = 2;
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
  fill(223, 192, 98);
  stroke(223, 192, 98);
  rect(width / 2 - 50, 435, 100, 50, 10);
  fill(255);
  textSize(18);
  text("score:", width / 2 - 45, 465);

  //creature
  push();
  translate(x, y);
  fill(0, 153, 51);
  stroke(0, 153, 51);
  triangle(-40, -41, -50, -65, -30, -53);
  triangle(+40, -41, +50, -65, +30, -53);
  fill(242, 242, 242, 200);
  stroke(255, 80);
  ellipse(0, 0, 100, 130); //body(transparent)
  fill(0, 153, 51);
  stroke(0, 153, 51);
  ellipse(0, -10, 44, 58); //eye(green)
  fill(252, 233, 29);
  beginShape();
  vertex(0, -35);
  vertex(0 - 12, -10);
  vertex(0, +15);
  vertex(12, -10);
  endShape(CLOSE);
  pop();
  //flower
  for (let i = 0; i < flowerx.length; i++) {
    if (flowerx[i] > x - 50 &&flowerx[i] < x + 50 &&flowery[i] > y - 65 &&flowery[i] < y + 65) {
      flowerState[i] = true
    }
  } 
  
  for (let i = 0; i < flowerx.length; i++) {
  if (flowerState[i] == false) {
    drawFlowers(); 
  }
}
  
  flowery[0] += flowerSpeed;
  flowery[1] += flowerSpeed;
  flowery[2] += flowerSpeed;
  
  // if (flowery[0] > height) {
  //     flowery[0] = 0;
  // } //reappear
  
  //berry
  if (berryx > x - 50 && berryx < x + 50 && berryy > y - 65) {
    state2 = true;
  }
  if (state2 == false) {
    drawBerries();
  }
}

function drawScene2() {
  fill(2001, 204, 0);
  circle(400, 300, 50);
}

function drawFlowers() {
  //multiple flowers
  //for (let i = 0; i < flowerx.length; i++) {
    drawSingleFlower(flowerx[0], flowery[0]);
    drawSingleFlower(flowerx[1], flowery[1]);
    drawSingleFlower(flowerx[2], flowery[2]);
 // }
}

function drawSingleFlower(x, y) {
  //one flower
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

function drawBerries() {
  push();
  translate(berryx + 5, berryy);
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
  pop();

  fill(179, 0, 0);
  stroke(179, 0, 0);
  circle(berryx + 7, berryy - 5, 13);
  fill(231, 61, 19);
  stroke(231, 61, 19);
  circle(berryx, berryy, 15);
  berryy = berryy + berrySpeed;
  if (berryy > height) {
    berryy = -20;
  }
}
