// here we go! Self-portrait!
function setup() {
  //create canvas
  createCanvas ( 600, 1000);
}
//fill background

function draw() {
  background( 'rgb(0, 200, 83)' );

  //translate center of grid to actual center of grid

  translate( 300, 450);

//LEGS***************
//actually one of the last things I did, but due to order and layering, needed to come first
  fill ('rgb(255, 224, 196)');
  noStroke();
  rect (10, 200, 55, 300);
//right leg, mirrored across the axis
  fill ('rgb(255, 224, 196)');
  noStroke();
  rect (-60, 200, 55, 300);
//END LEGS*********************

//SHOES********************************
  fill ('rgb(106,27,154)');
  noStroke();
  rect (-90, 450, 90, 60, 90, 20, 20, 70);
//right shoe
  fill ('rgb(106,27,154)');
  noStroke();
  rect (5, 450, 90, 60, 20, 90, 70, 20);
//END SHOES***************************

//LOWER body********************************
//Maybe we'll be conservative and wear a long skirt, like the brown one I wore to the symphony today.
  fill ('rgb(78,52,46)');
  noStroke();
  triangle(-80, 300, 80, 300, -40, 50);

//I don't like the way one triangle looks. Maybe we'll try two and it will give a better shape
  fill ('rgb(78,52,46)');
  noStroke();
  triangle(-80, 300, 80, 300, 40, 50);
//END LOWER BODY *****************************

//ARMS******************
//left arm, under the shirt
  stroke ('rgb(255, 224, 196)' );
  strokeWeight(40);
  line(-80, -30, -115, 50);

//lower left arm
  stroke ('rgb(255, 224, 196)' );
  strokeWeight(40);
  line(-50, 95, -115, 50);

//mirror for the right arm
  stroke ('rgb(255, 224, 196)' );
  strokeWeight(40);
  line(80, -30, 115, 50);
//lower right arm
  stroke ('rgb(255, 224, 196)' );
  strokeWeight(40);
  line(50, 95, 115, 50);

//END ARMS*********************

//UPPER BODY***************************

//I don't want my body to look boxy, so, we'll play around with rounding
  fill ('rgb(3, 169, 244)');
  noStroke();
  rect (-110, -70, 220, 70, 90, 90, 70, 70);
//okay, so those are shoulders. Now for the rest of the torso

  fill ('rgb(3, 169, 244)');
  noStroke();
  rect (-70, 0, 140, 150, 0, 0, 30, 30);
//okay, okay. I don't hate it.
//END UPPER BODY*********************

//SHIRT DECORATIONS********************
//This is the last part of my self-portrait, but it needs to go under the hands.

  fill ('rgb(255, 235, 59)');
  noStroke();
  triangle (5, 10, 55, 45, 30, 40 );
//I want to experiment with rotation, so we're going to try for a flower or sun shape. It will be triangles, with a circle overlaying the center
push();
    translate( 0, 0 );

    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );

    // rotate 45°
    // translate to (x:0, y:0)
    translate( 0, 0 );
    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );

    // rotate 45°
    // translate to to (x:0, y:0)
    translate( 0, 0 );
    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );

    // rotate 45°
    // translate to to (x:0, y:0)
    translate( 0, 0 );
    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );
    // rotate 45°
    // translate to (x:0, y:0)
    translate( 0, 0 );
    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );

    // rotate 45°
    // translate to (x:0, y:0)
    translate( 0, 0 );
    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );

    // rotate 45°
    // translate to (x:0, y:0)
    translate( 0, 0 );
    rotate( radians(45) );
    fill ('rgb(255, 235, 59)');
    noStroke();
    triangle (5, 10, 55, 45, 30, 40 );
  pop();
//Relied pretty heavily on your example for that, but I love how it turned out!

//Sun/flower center
    fill ('rgb(255, 179, 0)');
    noStroke();
    ellipse (0, 0, 50, 50);

//END SHIRT DECORATIONS**********************

//HANDS*******************
//Just going to use circles for HANDS
  fill ('rgb(255, 224, 196)');
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (60, 80, 50, 55);
//left HANDS
  fill ('rgb(255, 224, 196)');
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (-60, 80, 50, 55);
//END HANDS****************************
//HEAD*********************
  fill ('rgb(255, 224, 196)' );
  //no outline
  noStroke()
  ellipse (0, -150, 150, 170);
  //so apparently, the clockwise rule applies to the grid, as well. Instead of up being a positive value on the y-axis, it's negative
//HEAD*********************

//EYES***********************
  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (30, -170, 20, 20);
//it should all be the same except x-axis
  fill ('rgb(255,255,255)' );
  stroke('rgb(0,0,0)');
  strokeWeight (1);
  ellipse (-30, -170, 20, 20);
//okay, now pupils
//left pupil!
  fill ('rgb(0,150,0)' );
  noStroke();
  ellipse (-30, -170, 10, 10);
//right pupil!
  fill ('rgb(0,150,0)' );
  noStroke();
  ellipse (30, -170, 10, 10);
//end eyes*************************************

//MOUTH**********************************
//starting mouth. should be an arc, but maybe we can get more creative
  fill ('rgb(0,0,0)');
  arc (0, -110, 80, 50, 0, PI, CHORD);
//END MOUTH***************************

//NOSE********************************
//i want to try a nose. It should just be two lines
  stroke('rgb(0,0,0)');
  strokeWeight (3);
  line (0, -170, 10, -140);
//okay, now for the vertical part of the nose
  stroke('rgb(0,0,0)');
  strokeWeight (3);
  line (-5, -140, 10, -140);
//we did it, reddit
//END NOSE*****************************

//HAIR************************************
//Oh, god hair. Maybe a series of circles, like the rotating smiley faces?
//Why couldn't I have straight hair?

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (5, -220, 45, 45);
//Okay, so that's basically what will make up all of my hair
//the size will stay the same, but I need to start layering circles down one side to give the appearance of curly hair
//then I can mirror it all across the axis

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (25, -215, 45, 45);

//okay, okay. Not bad. I'm commited now, so let's just go for some more hair

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (35, -205, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (58, -190, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (65, -170, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (65, -140, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (70, -115, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (70, -90, 45, 45);

//okay, that's one side of the hair. Now to copy/paste all of that code above and put in the opposite x values

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-5, -220, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-25, -215, 45, 45);

    fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-35, -205, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-58, -190, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-65, -170, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-65, -140, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-70, -115, 45, 45);

  fill ('rgb(181,82,57)');
  noStroke();
  ellipse (-70, -90, 45, 45);
//my hair is a little longer than that, but I can have a haircut for this assignment.
//END HAIR*************************
//END SKETCH*************************************

}
