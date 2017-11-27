let dots = [];

var colors = {
  r: 0,
  g: 0,
  b: 0,
}

var y = 0;
var y2 = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(100);
    push();
    fill(0);
    textSize(32);
    text("Draw.", width/2, height/2);
    pop();
}

function mouseDragged() {
    let r = random(0.01, 1.5);
    let b = new Dot(mouseX, mouseY, r);
    dots.push(b);
}

function draw() {
      var g = 0
      var b = 255
      var r = 255

    for (let i = 0; i < dots.length; i++) {
        dots[i].move();
        dots[i].show();

        colors.r = random(0, 255);
        colors.g = random(0, 255);
        colors.b = random(0, 255);
    }

    y = y - 1;
  if (y < 0) {
    y = 3000;
  }
  stroke('black');
  line(0, y, width, y);

  y2 = y2 - 1;
if (y2 < 0) {
  y2 = 7000;
}
stroke('white');
line(0, y2, width, y2);

}

class Dot {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }

    show() {
        noStroke();
        fill(colors.r, colors.g, colors.b);
        ellipse(this.x, this.y, this.r * 2);
    }
}
