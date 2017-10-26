
//Kept a lot of the original ball variables
var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

var off = false;

function setup() {
    createCanvas(600, 650);
}

function draw() {
  var g = 0
  var b = 255
  var r = 115

//This is a color-changing background that didn't work for the last sketch, and I liked it so much that I saved it.
//The color will change wherever the mouse is in the window, but I didn't constrain it to the canvas because the center of the canvas renders a gray color
g = map(mouseX, windowWidth, 0, 255, 0);
r = map(mouseY, windowHeight, 0, 0, 255);
b = map(mouseY, windowHeight, 0, 255, 0);

//A lot of things happen if you turn the statement "off" or make it false
//The background changes, there is text, and the ball's behavior changes
if( off ) {
    background( 'gray' );
    textSize(36);
    textAlign(CENTER);
    fill('black');
    text("Great. You broke it.", 200, 200);
    text("Try to corner the ball, would ya?", 275, 550);
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
} else {
    background (r, g, b);
}

//I kept the original bouncing ball
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

//This is a cool effect- the ball changes the range of grayscale depending on position
//Highest range in the 0,0 and 600,650 corners, but black at highest y and white at highest x
    fill(random (r, g , b));
    ellipse(ball.x, ball.y, ball.width, ball.width);

//created a target to lure the viewer into clicking it
    d = 150
    fill('red');
    rectMode(CENTER);
    ellipse(300, 325, d, d)

    j = 100
    fill('white');
    rectMode(CENTER);
    ellipse(300, 325, j, j)

    f = 50
    fill('red');
    rectMode(CENTER);
    ellipse(300, 325, f, f)

}
//clicking the center of the target triggers the mousePressed function, which turns off the rainbow background and reveals text
//it also makes the floating ball respond to the mouse position
    function mousePressed() {
    if( mouseX > (275) && mouseX < (325) && mouseY > (300) && mouseY < (350) )
        off = !off;
        return false
}
