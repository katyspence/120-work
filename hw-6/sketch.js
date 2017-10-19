//establish global variables
var dots = {
  r: 0,
  g: 0,
  b: 0,
}

var spot = {
  x: 100,
  y: 50
};

var objTwo = {
  x: 100,
  y: 50
};

var center = {};
var rectTwo = {};

var x_pos = 0;

var y = -600;
var y2 = -600;
var y3 = -630;
var y4 = -400;
var y5 = -800;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //establish frame rate of 55 through roundabout modulus
    frameRate(110 % 56);
}

function draw() {
  //assigning random values to variables
  spot.x = random (0, width);
  spot.y = random (0, height);

  dots.r = random(50, 175);
  dots.g = random(70, 150);
  dots.b = random(140, 250);

  objTwo.x = random (0, width);
  objTwo.y = random (0, height);

  center.pos_x = width/2;
  center.pos_y = height/2;

  //I wanted to simulate the random dots example that David Schiffman demonstrated
  //I tried to pick a random spread of colors that would simulate rain, but there might be too much purple
  noStroke();
  fill(dots.r, dots.g, dots.b, 150);
  ellipse(spot.x, spot.y, 40, 40);

  //Lines radiating from the top right corner, like sunshine
  stroke('rgb(255,235,59)');
  strokeWeight(1);
  line (0, 0, objTwo.x, objTwo.y)

  //Then comes a series of lines that will draw across the screen once
  //For each, I created a sandbox and translate the center relative to the screen size
  //I also used these places as an opportunity to fulfill the math function requirements
  push();
  translate(center.pos_x, center.pos_y);
  stroke('black');
  strokeWeight(25);
  fill('black');
  rect(abs(-250), y, 5, 5 );
  y = y + 1;
  pop();

  push();
  translate(center.pos_x, center.pos_y);
  stroke('red');
  strokeWeight(100);
  fill('red');
  rect(250, y2, 5, 5 );
  y2 = y2 + (20 - 18);
  pop();

  push();
  translate(center.pos_x, center.pos_y);
  stroke('red');
  strokeWeight(2);
  fill('red');
  rect(-450, y3, 5, 5 );
  y3 = y3 + (20/2);
  pop();

  push();
  translate(center.pos_x, center.pos_y);
  stroke('red');
  strokeWeight(3);
  fill('red');
  rect(-100, y4, 5, 5 );
  y4 = y4 + (3 * 5);
  pop();

  push();
  translate(center.pos_x, center.pos_y);
  stroke('blue');
  strokeWeight(10);
  rect(-50, y5, 5, 5 );
  y5 = y5 + 2 ;
  pop();

  //flashing circle in the corner
  var redBall = floor( random(255) );
  fill (redBall);
  stroke('black');
  strokeWeight (1);
  //the circle can be enlarged and then shrunk with the mouseX position to create a layered circle effect
  var circleSize = map(mouseX, 0, 100, 10, 100);
  ellipse( 0, (40-40), circleSize );

  //I relied heavily on the example for this next bit, but shanged it up a little
  // draw an ellipse to arc across and create trains
  var y_pos = height - ((x_pos / width) ** 4) * height;
  stroke('green');
  fill(255);
  ellipse( x_pos, y_pos, 30 );
 // update the x_pos to create trains, bound it by the screen
  x_pos += 250;
  x_pos %= width;

}
