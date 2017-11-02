//set up the canvas
function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0);
}


function draw() {
  //define loval variables
  let perRow = 30;
	let circleSize = 15;
	let pattern = width / perRow;

//use nexted for statements to repeat the circle pattern horizontally and vertically
  for ( let y = circleSize; y < height; y += pattern) {
    for ( let x = circleSize; x < width; x += pattern) {
      fill( 0, 140, random(255) );
      ellipse( x, y, circleSize, circleSize );
    }
  
  }

//this was originally supposed to turn into a button or even a path, but I was getting very frustrated and I didn't leave myself enough time to work on it
  translate(width/2, height/2);
  push();
  fill('black')
  rect (-25, -30, 50, 60)
  pop();
}
