//creating a canvas that will fit the window

function setup() {
    createCanvas( windowWidth, windowHeight);
}

//Defining variables here
var spinArm = 0;
var snowballRotationRate = 0;
var headSize = 100;
var midSize = 175;
var bodySize = 250;
var snowflakes = 0;
var moreSnowflakes = 0;
var moreSnowflakesAgain = 0;

//update values
mouseY = 0;
snowballRotationRate = (mouseY * 0.2) - 15;
//update snowflakes information




//Time to draw. I'm thinking maybe something reminiscient of falling leaves? But easier?

function draw() {
  background( 'rgb(100, 150, 230)');
  //turn the cursor off
  noCursor();

  //Snow is falling. Winter is coming
  //In this section, I attempted to animate falling snow, but it's weird because each section falls the same speed and kind of clumps. I will be thinking of ways to counteract that.
  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (300, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (537, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (300, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (710, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (850, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (50, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (400, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (900, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (300, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (800, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (430, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (675, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (980, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1040, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1100, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1200, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (300, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (537, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (300, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (710, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (850, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (50, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (400, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (900, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (300, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (800, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (430, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (675, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (980, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1040, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1100, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1200, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (75, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (157, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (210, moreSnowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1350, snowflakes, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1500, moreSnowflakesAgain, 10, 10)

  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (1750, moreSnowflakes, 10, 10)

  snowflakes = snowflakes + 1;
  moreSnowflakes = moreSnowflakes + 5;
  moreSnowflakesAgain = moreSnowflakesAgain + 3;

  //CHARACTER****************************
  //a snowman, of course
  // make the character follow the mouse
    translate( mouseX, mouseY );

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
  //crazy stick arms that twirl in the snow
  //pulling some info from the example

  //creating the throwing arm

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

    //update arm to spin at a constant rotate
    spinArm = spinArm - 4;

    pop();

    //static left arm
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


    //the snowman throws a snowball at the viewer! Watch out!
    //by putting my previously-stated variable snowflakes in here, the size of the ellipse slowly increases, giving the appearance of getting closer
    fill ('rgb(255, 255, 255)' );
    stroke('rgb(0,0,0)');
    strokeWeight (1);
    ellipse( 150, 40, snowflakes )

}
