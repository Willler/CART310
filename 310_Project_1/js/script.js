"use strict";


let faceTitle;
let cheeksTitle;

let cheekSlider;
let faceHeightSlider;
let faceWidthSlider;
let earSlider;

let eyeSlider;
let eyeHeightSlider;
let eyeBlurSlider;

let noseSlider;
let noseHeightSlider;

let lipWidthSlider;
let lipHeightSlider;

let hairRedSlider;
let hairBlueSlider;
let hairGreenSlider;

function setup() {
  let cnv = createCanvas(windowWidth - 10, windowHeight - 10);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(210);
  //background
drawBackground();



  rectMode(CENTER);
  createSliders();
}

function draw() {

  drawFace();
}

function drawFace() {

  //setup
  noStroke();
  rectMode(CENTER);

  let redValue = hairRedSlider.value();
  let blueValue = hairBlueSlider.value();
  let greenValue = hairGreenSlider.value();


  //hair back
  fill(redValue - 15, greenValue - 15, blueValue - 15);
  rect(windowWidth/2, windowHeight/2 + 100, 290, 300);

  //neck
  fill(150);
  rect(windowWidth/2, windowHeight/2 + 200, 100, 100);
  fill(80);
  ellipse(windowWidth/2, windowHeight/2 + 180, 100, 100);

  //ears
  fill(150);
  earOver();
  fill(150);
  let earValue = earSlider.value();
  ellipse(windowWidth/2 + 150, windowHeight/2 + 20, earValue, 120);
  ellipse(windowWidth/2 - 150, windowHeight/2 + 20, earValue, 120);

  //face shape
  fill(150);
  faceOver();
  fill(150);

  let faceHeightValue = faceHeightSlider.value();
  let faceWidthValue = faceWidthSlider.value();
  ellipse(windowWidth/2, windowHeight/2, faceWidthValue, faceHeightValue);


  //cheekbones
  let cheekValue = cheekSlider.value();
  ellipseMode(CENTER);
  fill(60);
  ellipse(windowWidth/2, windowHeight/2 + 123, cheekValue, 90);
  fill(150);
  ellipse(windowWidth/2, windowHeight/2 + 125, cheekValue - 5, 100);
  cheekOver(0);

  //nose
  fill(60);
  // rect(windowWidth + 10, windowHeight + 50, 2, 20);

  let noseValue = noseSlider.value();
  let noseHeightValue = noseHeightSlider.value();

  triangle((windowWidth/2 - 20) - noseValue, windowHeight/2 + 100, windowWidth/2, (windowHeight/2 + 115) + noseHeightValue, (windowWidth/2 + 20) + noseValue, windowHeight/2 + 100);
  triangle((windowWidth/2 - 20) - noseValue, windowHeight/2 + 100, windowWidth/2 - 10, (windowHeight/2 + 90) - noseHeightValue, windowWidth/2, windowHeight/2 + 100);
  triangle(windowWidth/2, windowHeight/2 + 100, windowWidth/2 + 10, (windowHeight/2 + 90) - noseHeightValue, (windowWidth/2 + 20) + noseValue, windowHeight/2 + 100);


  //lips
  let lipWidthValue = lipWidthSlider.value();
  let lipHeightValue = lipHeightSlider.value();
  ellipse(windowWidth/2 - 10, windowHeight/2 + 150, 50 + lipWidthValue, 15 + lipHeightValue);
  ellipse(windowWidth/2 + 10, windowHeight/2 + 150, 50 + lipWidthValue, 15 + lipHeightValue)
  ellipse(windowWidth/2, windowHeight/2 + 155, 60 + lipWidthValue, 25 + lipWidthValue);

  //eyes
  fill(255);
  let eyeValue = eyeSlider.value();
  let eyeHeightValue = eyeHeightSlider.value();
  //eyeshadow
  fill(80);
  ellipse(windowWidth/2 - 65, windowHeight/2 + 15, eyeValue, eyeHeightValue + 10);
  ellipse(windowWidth/2 + 65, windowHeight/2 + 15, eyeValue, eyeHeightValue + 10);
  //whites
  fill(255);
  ellipse(windowWidth/2 - 65, windowHeight/2 + 15, eyeValue, eyeHeightValue);
  ellipse(windowWidth/2 + 65, windowHeight/2 + 15, eyeValue, eyeHeightValue);
  //pupils
  fill(0);
  ellipse(windowWidth/2 - 65, windowHeight/2 + 15, 25, 25);
  ellipse(windowWidth/2 + 65, windowHeight/2 + 15, 25, 25);

  //hair
  fill(redValue, greenValue, blueValue);
  arc(windowWidth/2, windowHeight/2 - 50, 310, 350, PI, 0);
  rect(windowWidth/2 - 134, windowHeight/2 + 70, 40, 300);
  rect(windowWidth/2 + 134, windowHeight/2 + 70, 40, 300);
}

function faceOver() {
  if ((mouseX > (windowWidth/2 - 150)) && (mouseX < (windowWidth/2 + 150)) && (mouseY > (windowHeight/2 - 200)) && ((mouseY < windowHeight/2 + 200))) {
    fill(37, 24, 41, 5);
    rect(300, 125, 400, 100);
    fill(255);
    textSize(20);
    faceTitle = text('The Malleable Shape', 120, 105);
    textSize(18);
    let faceDescription = 'Mimics the bone structure of the face through adjustable sliders and dials.';
    text(faceDescription, 270, 170, 300, 100);

    stroke(37, 24, 41, 5);
    strokeWeight(2);
    line(445, 170, windowWidth/2, windowHeight/2 + 50);
    noStroke();
  } else {
  }

}

function cheekOver() {
  if ((mouseX > (windowWidth/2 - 107.5)) && (mouseX < (windowWidth/2 + 107.5)) && (mouseY > (windowHeight/2 - 45)) && ((mouseY < windowHeight/2 + 200))) {
    fill(37, 24, 41, 5);
    rect(300, 600, 400, 100);
    fill(255);
    textSize(20);
    cheeksTitle = text('Reconfiguration at YOUR Fingertips', 120, 580);
    textSize(18);
    let cheeksDescription = 'Nothing is permanent. Be playful and experimental!';
    text(cheeksDescription, 270, 645, 300, 100);

    stroke(37, 24, 41, 5);
    strokeWeight(2);
    line(400, 600, windowWidth/2 - 100, windowHeight/2 + 150);
    noStroke();


  } else {
  }
}

function earOver() {
  //ellipse(windowWidth/2 - 150, windowHeight/2 + 20, 50, 120)
  if ((mouseX > ((windowWidth/2 - 150) - 25)) && (mouseX < ((windowWidth/2 - 150) + 25)) && (mouseY > ((windowHeight/2 + 20) - 60)) && (((windowHeight/2 + 20) + 60))) {
    fill(37, 24, 41, 5);
    rect(250, 350, 400, 100);
    fill(255);
    textSize(20);
    cheeksTitle = text('A little touch-up here and there.', 70, 330);
    textSize(18);
    let cheeksDescription = 'Choices are everywhere, even where you least except them.';
    text(cheeksDescription, 220, 395, 300, 100);

    stroke(37, 24, 41, 5);
    strokeWeight(2);
    line(400, 350, windowWidth/2 - 100, windowHeight/2);
    noStroke();
  } else {
  }
}

function createSliders() {
  // slider = createSlider(0, 255, 100);
  // slider.position(10, 10);
  // slider.style('width', '80px');
  // createSlider(min, max, [value], [step])
  fill(50, 0, 0, 215);
  strokeWeight(8);
  rect(windowWidth - 300, windowHeight/2, 400, 700);

  textSize(22);
  textStyle(BOLD);
  fill(255);

  cheekSlider = createSlider(200, 230, 215);
  cheekSlider.position(windowWidth - 290, 190);
  text('Cheeks', windowWidth - 450, 200);

  faceHeightSlider = createSlider(380, 420, 400);
  faceHeightSlider.position(windowWidth - 290, 90);
  text('Face Height', windowWidth - 450, 100);

  faceWidthSlider = createSlider(280, 320, 300);
  faceWidthSlider.position(windowWidth - 290, 140);
  text('Face Width', windowWidth - 450, 150);

  earSlider = createSlider(30, 70, 50);
  earSlider.position(windowWidth - 290, 240);
  text('Ear Width', windowWidth - 450, 250);

  eyeSlider = createSlider(60, 90, 75);
  eyeSlider.position(windowWidth - 290, 290);
  text('Eye Width', windowWidth - 450, 300);

  eyeHeightSlider = createSlider(15, 45, 30);
  eyeHeightSlider.position(windowWidth - 290, 390);
  text('Eye Height', windowWidth - 450, 400);

  noseSlider = createSlider(0, 20, 0);
  noseSlider.position(windowWidth - 290, 340);
  text('Nose Width', windowWidth - 450, 350);

  noseHeightSlider = createSlider(0, 20, 0);
  noseHeightSlider.position(windowWidth - 290, 440);
  text('Nose Height', windowWidth - 450, 450);

  lipWidthSlider = createSlider(0, 20, 0);
  lipWidthSlider.position(windowWidth - 290, 490);
  text('Lip Width', windowWidth - 450, 500);

  lipHeightSlider = createSlider(0, 20, 0);
  lipHeightSlider.position(windowWidth - 290, 540);
  text('Lip Height', windowWidth - 450, 550);

  hairRedSlider = createSlider(0, 255, 0);
  hairRedSlider.position(windowWidth - 290, 590);
  text('Hair Red', windowWidth - 450, 600);

  hairBlueSlider = createSlider(0, 255, 0);
  hairBlueSlider.position(windowWidth - 290, 640);
  text('Hair Blue', windowWidth - 450, 650);

  hairGreenSlider = createSlider(0, 255, 0);
  hairGreenSlider.position(windowWidth - 290, 690);
  text('Hair Green', windowWidth - 450, 700);

  textStyle(NORMAL);
  noStroke();
}

function drawBackground() {
  noFill();
  strokeWeight(30);
  stroke(80, 0, 0);
  ellipse(0, 500, 1500, 1500);
  ellipse(windowWidth, 1000, 1000, 1000);
  ellipse(windowWidth, 0, 800, 800);
  ellipse(0, windowHeight, 1000, 1000);
  ellipse(windowWidth, 1000, 1000, 1000);


  noStroke();
}
