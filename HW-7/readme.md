## Homework 7
Katy Spence, 50

[Algorithm Sketch](https://katyspence.github.io/120-work/hw-7/)

### Part 1- Explaining the Original Code

These opening lines create an object, called ball

    var ball = {};

size of the ball in pixels

    ball.width = 40;

x and y positions of the ball

    ball.x = 10;
    ball.y = 10;

other elements of the ball variable

    ball.delta_x = 1;
    ball.delta_y = 1;
    ball.scale_x = 1;
    ball.scale_y = 1;

The setup function establishes a canvas with a white background that is 400 pixels tall and as wide as the window that is opened

    function setup() {
        createCanvas(windowWidth, 400);
        background(255);
        }

function draw creates what we see as animation

    function draw() {

These lines determine the changing position and angle of the ball x position of the ball is changed by multiplying by 1 and adding 1

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

These if statements constrain the ball to the canvas
The x axis is greater than or equal to the position or width, or the x axis must be greater than or equal to zero. If both or one of these is true under the Logical Or Operator, it will return true.

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
The y axis is greater than or equal to the position or jeight, or the y axis must be greater than or equal to zero. If both or one of these is true under the Logical Or Operator, it will return true.

    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

Creates a white ellipse, using variables defined above

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
    }

Creates a function that when the mouse is pressed will change the speed and angle of the ball's motion based on the position of the mouse

    function mousePressed() {

This uses the map function to determine the mouse's position relative to the ball and change the angle depending on where on the canvas the mouse is clicked.

    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    }

The speed and angle of the ball depend on where you click on the canvas. If you click closer to the y-axis, the ball's vertical movement will reduce greatly. Similarly, if you click closer to the x-axis, the ball will lose horizontal movement. Click closer to the top left corner to make the ball slower and click closer to the bottom right to make it move very fast.

## How did you alter the sketch?

I kept a lot of the original ball variables, but I wanted to add interaction. The background that I created isn't conducive for a work of art that creates itself over time, but I like the interaction that can between the viewer, the creator, and the sketch itself.

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

This is a color-changing background that didn't work for the last sketch, and I liked it so much that I saved it.
The color will change wherever the mouse is in the window, but I didn't constrain it to the canvas because the center of the canvas renders a gray color

    g = map(mouseX, windowWidth, 0, 255, 0);
    r = map(mouseY, windowHeight, 0, 0, 255);
    b = map(mouseY, windowHeight, 0, 255, 0);

A lot of things happen if you turn the statement "off" or make it false
The background changes, there is text, and the ball's behavior changes

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

I kept the original bouncing ball

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

This is a cool effect- the ball changes the range of grayscale depending on position
Highest range in the 0,0 and 600,650 corners, but black at highest y and white at highest x

    fill(random (r, g , b));
    ellipse(ball.x, ball.y, ball.width, ball.width);

I created a target to lure the viewer into clicking it

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

Clicking the center of the target triggers the mousePressed function, which turns off the rainbow background and reveals text
It also makes the floating ball respond to the mouse position

    function mousePressed() {
    if( mouseX > (275) && mouseX < (325) && mouseY > (300) && mouseY < (350) )
        off = !off;
        return false
        }
