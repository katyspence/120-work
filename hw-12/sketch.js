// create variable for the object, called ball
let balls = [];
const numOfBalls = 100;
var value = 255;

var colors = {
  r: 0,
  g: 0,
  b: 0,
  y: 0,
}

//create second object for more visual interest
var objTwo = {
  x: 0,
  y: 0
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);

    // create a new ball object of class type "Ball"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position over so balls don't start on top of each other
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background(value);

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].move();
        balls[i].display();
        //randomize fill colors on grayscale
        colors.r = random(0, 255);
        colors.g = random(0, 255);
        colors.b = random(0, 255);
        //define objTwo parameters for drawing
        objTwo.x = random (0, width);
        objTwo.y = random (0, height);
    //I thought it needed a little more visual interest, so I added the rainbow lines
    push();
    stroke(colors.r, colors.g, colors.b);
    strokeWeight(1.5);
    line (windowWidth/3, windowHeight/4, objTwo.x, objTwo.y)
    pop();


      }
    }
//the background changes from clack to white upon clicking
  function mouseClicked() {
      if (value == 255) {
        value = 0;
      } else {
        value = 255;
      }
    }

////Ball class
class Ball {
    constructor(x, y, size) {
        //defining characteristics of Ball that will define how it changes and interacts with each other
        this.color = ('yellow');
        this.size = random(10, 50);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }

    //how the balls will look
    display() {
        push();
        noStroke();
        // set the ball fill color to be random grayscale
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }
    //define how the balls will move in the screen
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

//I chose not to do edge check
//If you let the sketch sit, all of the balls will eventually go away.
//sometimes they come back, which implies the math is still going even if you can't see it

    ballCheck(otherBalls, theId) {
        // a for loop affects each ball in the array
        //if n != theId, the the sketch will check for touching balls, using the radius of each circle as a parameter
        for (let n = 0; n < otherBalls.length; n++) {
            if (n != theId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // cycle through grayscale colors
                    if( this.color == (colors.r, colors.g, colors.b)) {
                        this.color = (colors.r, colors.g, colors.b);
                    } else {
                        this.color = (colors.r, colors.g, colors.b);
                    }
                }
            }
        }
    }

    mouseCheck() {
        // get the distance between the mouse and the center of the bubble
        let d = dist(this.x, this.y, mouseX, mouseY);
        // check if that distance is less than the bubble radius
        // if it is, then the mouse if within
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
      }
    }
