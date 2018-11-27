var img;  // Declare variable 'img'.
var steeringWheelX = 960-500;
var steeringWheelY = 660-500;
var steeringRotate = 0;
var prevMouseXSteering = 0;

function setup() {
  createCanvas(1080, 1080);
  steeringWheel = loadImage("media/controls/steeringWheel.png");  // Load the image
  button = createButton("5");
  button.position(900, 300);
  button = createButton("4");
  button.position(870, 300);
  button = createButton("3");
  button.position(840, 300);
  button = createButton("2");
  button.position(810, 300);
  button = createButton("1");
  button.position(780, 300);
  slider = createSlider(0, 255, 100);
  slider.position(760, 250);
  checkbox1 = createCheckbox('Gas', false);
  checkbox2 = createCheckbox('Brake', false);
  checkbox1.position(500, 740);
  checkbox2.position(550, 740);
}

function draw() {
  background(90);
  //5 buttons

 
  translate(1080 / 2, 1080 / 2);
  rotate(PI / 180 * steeringRotate);
  imageMode(CENTER);
  image(steeringWheel, 0, 0, 250, 250);
  
}

function mouseDragged() {
  if (steeringRotate > 360 || steeringRotate < -360) 
    steeringRotate = 0;
  else if (mouseX > prevMouseXSteering) {
    steeringRotate+=3;
    prevMouseXSteering = mouseX;
  } else if (mouseX < prevMouseXSteering) {
    steeringRotate-=3;
    prevMouseXSteering = mouseX;
  }
  // prevent default
  return false;
}