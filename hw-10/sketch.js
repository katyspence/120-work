//I'm redoing my snoman sketch from Week 5
//Defining global variables
var flakes = 25;
var number;
var myArr = [];
var snowball = 0;

//Setting up the Canvas
//Further defining variables
function setup() {
    createCanvas( windowWidth, windowHeight );
    var wideNumber = width / flakes;
    var highNumber = height / flakes;
    number = wideNumber * highNumber;
//defining my array
//not sure if the sandbox is needed, but my code was funky, so I put them in several places
push();
  var idx = 0;
  //position and number of snowflakes
    for (var y = 0; y < highNumber; y++) {
    for (var x = 0; x < wideNumber; x++) {
      //This controls the snowflakes, as defined by the function below
      myArr[idx++] = new Snow(x*flakes, y*flakes, flakes/3, flakes/3,
        random(0.05, 0.8), flakes);
  pop();
    }
  }
}

//easy draw function here
function draw() {
    background('rgb(100, 150, 230)');
//snowman that follows the mouse
    push();
    translate( mouseX, mouseY );
    snowMan();
    pop();

//pulling the two pieces from my array
    push();
  for (var i = 0; i < myArr.length; i++) {
    myArr[i].update();
    myArr[i].draw(draw + 1);
    pop();

    push();
    fill('rgb(255,255,255)');
    line (0, windowWidth)
  }
}
//the following bits were adapted from a reference code on the P5 website
//function snow is pulled into the array
function Snow(xOff, yOff, x, y, speed, flakes) {
  push();
  this.xOff = xOff;
  this.yOff = yOff;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.flakes = flakes;
  this.xDir = 1;
  this.yDir = 1;
  pop();
}

// Updating the variables
Snow.prototype.update = function() {
   this.y = this.y + ((this.speed + .25) * this.xDir) % windowHeight;
}

// Drawing the object
Snow.prototype.draw = function() {
    noStroke();
    fill( 'rgb(255,255,255)'  );
//This bit actually took me forever. But I finally got it to continuously snow!
    ellipse(((this.xOff + this.y) % windowWidth), ((this.yOff + this.y)  % windowHeight), 5, 5);
}

//The following snowman code has been largely copied from Week 5
//Some adjustments had to be made to coexist with the new code above.

//CHARACTER****************************
function snowMan(){
push();
push();
// make the character follow the mouse
 translate( mouseX, mouseY );
  //Defining variables here
pop();
  var headSize = 100;
  var midSize = 175;
  var bodySize = 250;
  var spinArm = 0;

  //lower body
  fill ('rgb(255,255,255)' );
  stroke('rgb(0, 0, 0)');
  strokeWeight (1);
  ellipse( 0, 275, bodySize );
  //middlebody
  fill ('rgb(255,255,255)' );
  stroke('rgb(0, 0, 0)');
  strokeWeight (1);
  ellipse( 0, 120, midSize );
  //HEAD***********************
  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse( 0, 0, headSize );

//end body *************************************

//FACE**********************************
// mouth
  fill ('rgb(0, 0, 0)');
  arc (0, 20, 30, 10, 0, PI, CHORD);
  //two eyes made out of coal
  //two black ellipses, reflected across the axis
  fill ('rgb(0, 0, 0)');
  noStroke();
  ellipse (-15, -15, 10, 10);

  fill ('rgb(0, 0, 0)');
  noStroke();
  ellipse (15, -15, 10, 10);

  fill ('rgb(255, 152, 0)');
  noStroke();
  triangle (0, -10, 25, 0, 0, 4);

//coal buttons
//three black ellipses down the front
  fill ('rgb(0, 0, 0)');
  noStroke();
  ellipse (0, 70, 15, 15);

  fill ('rgb(0, 0, 0)');
  noStroke();
  ellipse (0, 100, 15, 15);

  fill ('rgb(0, 0, 0)');
  noStroke();
  ellipse (0, 130, 15, 15);

//hat- a series of rectangles to make a top hat
  fill ('rgb(0, 0, 0)');
  noStroke();
  rect (-35, -155, 70, 110);

  fill ('rgb(0, 0, 0)');
  noStroke();
  rect (-60, -55, 120, 20, 90, 90, 70, 70);

  fill ('rgb(198, 40, 40)');
  noStroke();
  rect (-35, -70, 70, 15,);

//ARMS*****************************

  //draw the spinning arm
  push();
  translate( 70, 100);
  //rotate arm
  rotate( radians (spinArm) );
  //draw the arm
  stroke('rgb(0,0,0)');
  strokeWeight (10);
  line (0, 0, 150, 40);
  //draw stick fingers
  stroke('rgb(0,0,0)');
  strokeWeight (8);
  line (150, 40, 150, 25);

  stroke('rgb(0,0,0)');
  strokeWeight (8);
  line (150, 40, 170, 35);

  stroke('rgb(0,0,0)');
  strokeWeight (8);
  line (150, 40, 165, 50);
  pop();

  //rotate based on mouseX
  push();
  //translate center
  translate (-70, 100);
  rotate (radians( mouseX) );
  //draw arm
  stroke('rgb(0,0,0)');
  strokeWeight (10);
  line (0, 0, -150, 40);

  //draw stick fingers
  stroke('rgb(0,0,0)');
  strokeWeight (8);
  line (-150, 40, -150, 25);

  stroke('rgb(0,0,0)');
  strokeWeight (8);
  line (-150, 40, -170, 35);

  stroke('rgb(0,0,0)');
  strokeWeight (8);
  line (-150, 40, -165, 50);
  pop();
  pop();
}
