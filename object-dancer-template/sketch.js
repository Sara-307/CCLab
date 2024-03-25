/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  // ...except to adjust the dancer's name on the next line:
  dancer = new SaraDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class SaraDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.oringalX=startX;
    // add properties for your dancer here
    this.footOffset = 0;
    this.tailAngle = 0; 
    this.tailLength = 60; 
    this.tailWidth = 20; 
    this.curveAmount = 5; 
  }
  
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.tailAngle = (PI/4)*-1 +sin(frameCount * 0.05) * 0.3;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    translate(this.x, this.y);

    rotate(sin(frameCount * 0.05) * 0.03);
    rect(-33, 52 + this.footOffset, 30, 20, 20);//foot-behind
    ellipse(19, 43, 94, 75);//body
    rect(-13, 65 + this.footOffset, 30, 20, 20);//feet
    rect(33, 62 - this.footOffset, 30, 20, 20);
    this.footOffset = sin(frameCount * 0.1) * 3.5;

    rotate(sin(frameCount*0.1) * 0.15);
    push()
    scale(0.7)
    triangle(-20,-53,-35,-35,-55,-68); //ears
    triangle(20,-53,35,-35,55,-68);
    fill(255, 204, 204)
    triangle(-55,-68,-35,-35,-47,-31);
    triangle(55,-68,35,-35,47,-31);
    fill(255);
    stroke(89, 89, 89);
    ellipse(0, -10, 110, 100); //head
    strokeWeight(1);
    stroke(0);
    line(-23, 5, -50, 3); //beard
    line(-23, 5, -47, 9);
    line(23, 5, 50, 3);
    line(23, 5, 47, 9);
    strokeWeight(2);
    noFill();
    stroke(0);
    ellipse(0, 8, 5, 3); //nose
    line(0,10,0,15);
    line(0,15,-5,17);
    line(0,15,5,17);
    fill(204, 255, 255);
    strokeWeight(2)
    beginShape(); //right eye
    curveVertex(12,0);
    curveVertex(12,0);
    curveVertex(35,-5);
    curveVertex(42,-25);
    curveVertex(22,-20);
    curveVertex(12,0);
    curveVertex(12,0);
    endShape();
    beginShape(); //left eye
    curveVertex(-12,0);
    curveVertex(-12,0);
    curveVertex(-35,-5);
    curveVertex(-42,-25);
    curveVertex(-22,-20);
    curveVertex(-12,0);
    curveVertex(-12,0);
    endShape();
    strokeWeight(1.5)
    fill(89, 89, 89);
    beginShape();
    curveVertex(42,-25);
    curveVertex(42,-25);
    curveVertex(27,-21);
    curveVertex(25,-4);
    curveVertex(35,-6);
    curveVertex(40,-14)
    curveVertex(42,-25);
    curveVertex(42,-25);
    endShape();
    beginShape();
    curveVertex(-12,0);
    curveVertex(-12,0);
    curveVertex(-22,-20);
    curveVertex(-30,-21);
    curveVertex(-27,-3);
    curveVertex(-12,0);
    curveVertex(-12,0);
    endShape();
    fill(0);
    circle(32,-12,5);
    circle(-22,-10,5);
    pop()
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()
    pop();

    push() //tail
    translate(this.x + 58, this.y + 35); 
    noFill();
    stroke(255);
    strokeWeight(10);
    rotate(this.tailAngle); 
    beginShape();
    for (let i = 0; i < this.tailLength; i++) {
      let x = i;
      let y = sin(i * 2*PI / this.tailLength) * this.curveAmount; 
      curveVertex(x, y);
    }
    endShape();
    pop()
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/