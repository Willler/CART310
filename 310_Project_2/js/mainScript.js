"use strict";

function setup() {

  // drawing the base canvas and background on the page
  let cnv = createCanvas(windowWidth - 10, windowHeight - 10);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0);

  // calling the map outline function
  mapOutline();
}


function draw() {



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
  //green
  stroke(0, 255, 0);
  rect(windowWidth/2 + 530, windowHeight/2, 420, 250, 5);
  //blue
  stroke(0, 0, 255);
  rect(windowWidth/2 + 530, ((windowHeight/3)*2.49), 420, 250, 5);

  //shop lines
  stroke(255);
  line((windowWidth/2 + 300)/2 - 200, 200, (windowWidth/2 + 300)/2 - 200, windowHeight - 250);
  line((windowWidth/2 + 300)/2 + 200, 50, (windowWidth/2 + 300)/2 + 200, windowHeight - 50);

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
  rect((windowWidth/2 + 300)/2 + 479, 390, 50, 200, 5);
  rect((windowWidth/2 + 300)/2 + 404, windowHeight/2 + 120, 200, 350, 5);


}
