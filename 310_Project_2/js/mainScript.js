"use strict";

//variables for randomized circle generation
let numCircles = 150;
let circleDiameter = 25;
let circleX;
let circleY;

let redUserEntranceX;
let redVelocityX = 0;
let redSpeed = 2;

let greenUserEntranceX;
let greenVelocityX = 0;
let greenSpeed = 2;

let blueUserEntranceY;
let blueVelocityY = 0;
let blueSpeed = 2;

//variables for display screen
let redUX;
let redUXVelocity = 0;
let redUY;
let redUYVelocity = 0;
let redUXSpeed = 2;
let redUYSpeed = 2;

let greenUX;
let greenUXVelocity = 0;
let greenUY;
let greenUYVelocity = 0;
let greenUXSpeed = 2;
let greenUYSpeed = 2;

let blueUX;
let blueUXVelocity = 0;
let blueUY;
let blueUYVelocity = 0;
let blueUXSpeed = 2;
let blueUYSpeed = 2;


function setup() {

  // drawing the base canvas and background on the page
  let cnv = createCanvas(windowWidth - 10, windowHeight - 10);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);

  //
  // // calling the map outline function
  // mapOutline();
  background(0);
  setupEntrance();
  setupDisplay();
  crowdSimulation();

}


function draw() {

  mapOutline();

  handleInput();
  moveStuff();
  redUserEntrance();
  greenUserEntrance();
  blueUserEntrance();
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

  ///////////////////////////entrances
  //red
  stroke(255, 0 , 0);
  rect(windowWidth/2 + 530, (windowHeight/3)/2, 420, 250, 5);
  textSize(24);
  text('Hold Z', windowWidth/2 + 350, (windowHeight/3)/2 - 75);
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
  text('Hold X', windowWidth/2 + 350, windowHeight/2 - 75);
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
  // stairs/progress
  line(windowWidth/2 + 500, 425, windowWidth/2 + 500, 455);
  line(windowWidth/2 + 470, 425, windowWidth/2 + 470, 455);
  line(windowWidth/2 + 440, 425, windowWidth/2 + 440, 455);
  stroke(0,255,0);
  line(windowWidth/2 + 360, 425, windowWidth/2 + 360, 455);

  //blue
  stroke(0, 0, 255);
  rect(windowWidth/2 + 530, ((windowHeight/3)*2.49), 420, 250, 5);
  text('Hold C', windowWidth/2 + 350, ((windowHeight/3)*2.49) - 75);
  stroke(255);
  //outlines
  line(windowWidth/2 + 480, 593, windowWidth/2 + 480, 670);
  line(windowWidth/2 + 580, 593, windowWidth/2 + 580, 670);
  line(windowWidth/2 + 400, 720, windowWidth/2 + 480, 670);
  line(windowWidth/2 + 660, 720, windowWidth/2 + 580, 670);
  line(windowWidth/2 + 400, 720, windowWidth/2 + 400, 842);
  line(windowWidth/2 + 660, 720, windowWidth/2 + 660, 842);
  //stairs
  line(windowWidth/2 + 430, 740, windowWidth/2 + 630, 740);
  line(windowWidth/2 + 430, 760, windowWidth/2 + 630, 760);
  line(windowWidth/2 + 430, 780, windowWidth/2 + 630, 780);
  //trigger
  stroke(0,0,255);
  line(windowWidth/2 + 430, 820, windowWidth/2 + 630, 820);

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
  fill(255, 0, 0, 90);
  ellipse(redUserEntranceX, (windowHeight/2)/3 + 6, 25, 25);

  if (redUserEntranceX > windowWidth/2 + 710) {
    redUserDisplay();
    redMovementInstructions();
  }
}

function redUserDisplay() {
  ellipseMode(CENTER);
  noStroke();
  fill(255,0,0);
  ellipse (redUX, redUY, 25, 25);
}

function greenUserEntrance() {
  noStroke();
  fill(0, 255, 0);
  ellipse(greenUserEntranceX, windowHeight/2 + 6, 25, 25);

  if (greenUserEntranceX < windowWidth/2 + 360) {
    greenUserDisplay();
    greenMovementInstruction();
  }
}

function greenUserDisplay() {
  ellipseMode(CENTER);
  noStroke();
  fill(0,255,0);
  ellipse (greenUX, greenUY, 25, 25);
}

function blueUserEntrance() {
  noStroke();
  fill(0,0,255);
  ellipse((windowWidth/2 + 530), blueUserEntranceY, 25, 25);

  if (blueUserEntranceY > 820) {
    blueUserDisplay();
    blueMovementInstructions();
  }
}

function blueUserDisplay() {
  ellipseMode(CENTER);
  noStroke();
  fill(0,0,255);
  ellipse (blueUX, blueUY, 25, 25);
}

function setupEntrance() {
  redUserEntranceX = (windowWidth/2 + 350);
  greenUserEntranceX = (windowWidth/2 + 700);
  blueUserEntranceY = ((windowHeight/3)*2.49 - 80);
}

function setupDisplay() {
  redUX = 50;
  redUY = 630;
  greenUX = 1000;
  greenUY = 267;
  blueUX = 330;
  blueUY = 50;
}

function handleInput() {
  //hold z
  if (keyIsDown(90)) {
    redVelocityX = redSpeed;
  } else {
    redVelocityX = 0;
  }
//x
  if (keyIsDown(88)) {
    greenVelocityX = -greenSpeed;
  } else {
    greenVelocityX = 0;
  }
//c
  if (keyIsDown(67)) {
    blueVelocityY = blueSpeed;
  } else {
    blueVelocityY = 0;
  }
//ws
  if (keyIsDown(87)) {
    redUYVelocity = -redUYSpeed;
  } else if (keyIsDown(83)) {
    redUYVelocity = redUYSpeed;
  } else {
    redUYVelocity = 0;
  }
  //ad
  if (keyIsDown(65)) {
    redUXVelocity = -redUXSpeed;
  } else if (keyIsDown(68)) {
    redUXVelocity = redUXSpeed;
  } else {
    redUXVelocity = 0;
  }

  //updown
    if (keyIsDown(UP_ARROW)) {
      greenUYVelocity = -greenUYSpeed;
    } else if (keyIsDown(DOWN_ARROW)) {
      greenUYVelocity = greenUYSpeed;
    } else {
      greenUYVelocity = 0;
    }

    //LEFTRIGHT
      if (keyIsDown(LEFT_ARROW)) {
        greenUXVelocity = -greenUXSpeed;
      } else if (keyIsDown(RIGHT_ARROW)) {
        greenUXVelocity = greenUXSpeed;
      } else {
        greenUXVelocity = 0;
      }

      //uj
        if (keyIsDown(85)) {
          blueUYVelocity = -blueUYSpeed;
        } else if (keyIsDown(74)) {
          blueUYVelocity = blueUYSpeed;
        } else {
          blueUYVelocity = 0;
        }

        //hk
          if (keyIsDown(72)) {
            blueUXVelocity = -blueUXSpeed;
          } else if (keyIsDown(75)) {
            blueUXVelocity = blueUXSpeed;
          } else {
            blueUXVelocity = 0;
          }
}

function moveStuff() {
  redUserEntranceX += redVelocityX;
  greenUserEntranceX += greenVelocityX;
  blueUserEntranceY += blueVelocityY;

  redUX += redUXVelocity;
  redUY += redUYVelocity;
  greenUX += greenUXVelocity;
  greenUY += greenUYVelocity;
  blueUX += blueUXVelocity;
  blueUY += blueUYVelocity;
}

function redMovementInstructions() {
  //  redUX = 50;
  //  redUY = 630;
  textSize(14);
  noStroke();
  fill(255,0,0);
  text('Red: WASD', 40, 680);

}

function greenMovementInstruction() {
  //greenUX = 1000;
  //greenUY = 267;

  textSize(14);
  noStroke();
  fill(0,255,0);
  text('Green: Arrow Keys', 900, 60);
}

function blueMovementInstructions() {
  //blueUX = 330;
  //blueUY = 50;

  textSize(14);
  noStroke();
  fill(0,0,255);
  text('Blue: UHJK', 380, 50);
}

function crowdSimulation() {
  for (var i = 0; i < numCircles; i++) {
    circleX = random(50, 1000);
    circleY = random(50, 900);
    let redC = random(0, 255);
    let greenC = random(0, 255);
    let blueC = random(0, 255);
    noStroke();
    fill(redC, greenC, blueC, 70);
    ellipse(circleX, circleY, circleDiameter, circleDiameter);
  }
}
