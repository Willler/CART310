"use strict";

let redU;
let greenU;
let blueU;

let redUserEntranceX;
let redVelocityX = 0;
let redSpeed = 2;

let greenUserEntranceX;
let greenVelocityX = 0;
let greenSpeed = 2;

let blueUserEntranceX;
let blueVelocityX = 0;
let blueSpeed = 2;

function setup() {

  // drawing the base canvas and background on the page
  let cnv = createCanvas(windowWidth - 10, windowHeight - 10);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);

  //
  // // calling the map outline function
  // mapOutline();

  setupEntrance();
}


function draw() {
  background(0);
  mapOutline();
  handleInput();
  moveStuff();
  redUserEntrance();
  greenUserEntrance();
}

function mapOutline() {

  //dividers
  stroke(255);
  strokeWeight(2);
  line(windowWidth/2 + 300, 20, windowWidth/2 + 300, windowHeight - 30);
  line(windowWidth/2 + 330, windowHeight/3, windowWidth - 30, windowHeight/3);
  line(windowWidth/2 + 330, (windowHeight/3)*2, windowWidth - 30, (windowHeight/3)*2);

  //screen
  noFill();
  rectMode(CORNER);
  rect(20, 20, windowWidth/2 + 250, windowHeight - 50, 5);

  //station gates
  rectMode(CENTER);
  rect((windowWidth/2 + 300)/2, 150, 25, 45);
  rect((windowWidth/2 + 300)/2, 250, 25, 45);
  rect((windowWidth/2 + 300)/2, 350, 25, 45);
  rect((windowWidth/2 + 300)/2, 450, 25, 45);
  rect((windowWidth/2 + 300)/2, 550, 25, 45);
  rect((windowWidth/2 + 300)/2, 650, 25, 45);
  rect((windowWidth/2 + 300)/2, 750, 25, 45);

  //entrances
  //red
  stroke(255, 0 , 0);
  rect(windowWidth/2 + 530, (windowHeight/3)/2, 420, 250, 5);
  stroke(255);
  //narrow
  line(windowWidth/2 + 320, 125, windowWidth/2 + 530, 125);
  line(windowWidth/2 + 320, 175, windowWidth/2 + 530, 175);
  //diverging
  line(windowWidth/2 + 530, 125, windowWidth/2 + 740, 100);
  line(windowWidth/2 + 530, 175, windowWidth/2 + 740, 200);
  //stairs
  line(windowWidth/2 + 570, 130, windowWidth/2 + 570, 170);
  line(windowWidth/2 + 590, 125, windowWidth/2 + 590, 175);
  line(windowWidth/2 + 610, 120, windowWidth/2 + 610, 180);
  stroke(255, 0, 0);
  line(windowWidth/2 + 710, 120, windowWidth/2 + 710, 180);

  //green
  stroke(0, 255, 0);
  rect(windowWidth/2 + 530, windowHeight/2, 420, 250, 5);
  stroke(255);
  //narrow
  line(windowWidth/2 + 320, 415, windowWidth/2 + 530, 415);
  line(windowWidth/2 + 320, 465, windowWidth/2 + 530, 465);
  //big
  line(windowWidth/2 + 530, 360, windowWidth/2 + 740, 360);
  line(windowWidth/2 + 530, 520, windowWidth/2 + 740, 520);
  //connecting
  line(windowWidth/2 + 530, 360, windowWidth/2 + 530, 415);
  line(windowWidth/2 + 530, 520, windowWidth/2 + 530, 465);
  //
  line(windowWidth/2 + 500, 425, windowWidth/2 + 500, 455);
  line(windowWidth/2 + 470, 425, windowWidth/2 + 470, 455);
  line(windowWidth/2 + 440, 425, windowWidth/2 + 440, 455);
  stroke(0,255,0);
  line(windowWidth/2 + 360, 425, windowWidth/2 + 360, 455);

  //blue
  stroke(0, 0, 255);
  rect(windowWidth/2 + 530, ((windowHeight/3)*2.49), 420, 250, 5);

  //shop lines
  stroke(255);
  line((windowWidth/2 + 300)/2 - 200, 200, (windowWidth/2 + 300)/2 - 200, windowHeight - 250);
  line((windowWidth/2 + 300)/2 + 200, 300, (windowWidth/2 + 300)/2 + 200, windowHeight - 50);

  //store outlines left
  rectMode(CORNER);
  rect(20, 20, 280, 150, 5);
  rect(20, 200, 250, 400, 5);
  rect(20, 650, 300, 184, 5);
  rectMode(CENTER);
  rect((windowWidth/2 + 300)/2, 46, 350, 50, 5);

  // store outlines right
  rect((windowWidth/2 + 300)/2 + 280, 80, 100, 120, 5);
  rect((windowWidth/2 + 300)/2 + 410, 180, 100, 120, 5);
  rect((windowWidth/2 + 300)/2 + 290, 230, 80, 80, 5);
  rect((windowWidth/2 + 300)/2 + 320, 340, 120, 30, 5);
  rect((windowWidth/2 + 300)/2 + 320, 440, 120, 30, 5);
  rect((windowWidth/2 + 300)/2 + 479, 390, 50, 200, 5);
  rect((windowWidth/2 + 300)/2 + 404, windowHeight/2 + 242, 200, 320, 5);
}

function redUserEntrance() {
  noStroke();
  fill(255, 0, 0);
  ellipse(redUserEntranceX, (windowHeight/2)/3 + 6, 25, 25);
}

function greenUserEntrance() {
  noStroke();
  fill(0, 255, 0);
  ellipse(greenUserEntranceX, windowHeight/2 + 6, 25, 25);
}

function setupEntrance() {
  redUserEntranceX = (windowWidth/2 + 350);
  greenUserEntranceX = (windowWidth/2 + 700);
}

function handleInput() {
  //hold p
  if (keyIsDown(90)) {
    redVelocityX = redSpeed;
  } else {
    redVelocityX = 0;
  }

  if (keyIsDown(88)) {
    greenVelocityX = -greenSpeed;
  } else {
    greenVelocityX = 0;
  }
}

function moveStuff() {
  redUserEntranceX += redVelocityX;
  greenUserEntranceX += greenVelocityX;
}









function blueUserEntrance() {

}

function redUser() {

}

function greenUser() {

}

function blueUser() {

}

function crowdSimulation() {

}
