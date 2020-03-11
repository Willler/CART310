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
  strokeWeight(5);
  line(windowWidth/2 + 300, 20, windowWidth/2 + 300, windowHeight - 30);
  line(windowWidth/2 + 330, windowHeight/3, windowWidth - 30, windowHeight/3);
  line(windowWidth/2 + 330, (windowHeight/3)*2, windowWidth - 30, (windowHeight/3)*2);

  //screen
  noFill();
  rect(20, 20, windowWidth/2 + 250, windowHeight - 50, 5);

  //station gates
  rectMode(CENTER);
  rect((windowWidth/2 + 300)/2, 120, 25, 45);
  rect((windowWidth/2 + 300)/2, 220, 25, 45);
  rect((windowWidth/2 + 300)/2, 320, 25, 45);
  rect((windowWidth/2 + 300)/2, 420, 25, 45);
  rect((windowWidth/2 + 300)/2, 520, 25, 45);
  rect((windowWidth/2 + 300)/2, 620, 25, 45);
  rect((windowWidth/2 + 300)/2, 720, 25, 45);

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
  line((windowWidth/2 + 300)/2 - 200, 0, (windowWidth/2 + 300)/2 - 200, windowHeight);
    line((windowWidth/2 + 300)/2 + 200, 0, (windowWidth/2 + 300)/2 + 200, windowHeight); 

}
