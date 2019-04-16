"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload

let bar;
let globe;
let boxes = [];
let state = "LOADING"
let cursor;
let cursorX = 0;
let cursorY = 0;
let logos = [];
let initialBalance = 200;
function preload() {
}


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth,windowHeight);

globe = new Globe(windowWidth/2,windowHeight/2);
bar = new Bar(windowWidth/2,windowHeight/2);

logos.push(loadImage("../assets/images/logos/logo1.png"));
logos.push(loadImage("../assets/images/logos/logo2.png"));
logos.push(loadImage("../assets/images/logos/logo3.png"));
logos.push(loadImage("../assets/images/logos/logo4.png"));
logos.push(loadImage("../assets/images/logos/logo5.png"));
logos.push(loadImage("../assets/images/logos/logo6.png"));

boxes.push(new Box(100,50,350,350,logos[0]));
boxes.push(new Box(525,50,350,350,logos[1]));
boxes.push(new Box(950,50,350,350,logos[2]));
boxes.push(new Box(100,450,350,350,logos[3]));
boxes.push(new Box(525,450,350,350,logos[4]));
boxes.push(new Box(950,450,350,350,logos[5]));
imageMode(CENTER);
cursor = loadImage('../assets/images/cursor.png');
}


// draw()
//
// Description of draw()

function draw() {
noCursor();
background(0);
switch (state) {
    case "LOADING":
    {
      displayLoading();
      break;
    }

    case "START":
    {
      displayStart();
      break;
    }
  }
}

function displayLoading(){
globe.display();
globe.move();
bar.progress();
}

function displayStart(){
push();
fill(255,0,0);
textAlign(CENTER);
textSize(25);
text('Account Balance: ' + nf(initialBalance,1,2) +'$',200,50);
pop();

for(let i = 0; i < boxes.length; i ++){
  boxes[i].display();
}

fakeCursor();
}

function fakeCursor(){
cursorX = lerp(cursorX,mouseX, 0.03);
cursorY = lerp(cursorY,mouseY, 0.03);
image(cursor,cursorX,cursorY);
}
