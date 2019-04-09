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
function preload() {
}


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth,windowHeight);
//globe = createImg('../assets/images/globe.png');
globe = new Globe(windowWidth/2,windowHeight/2);
bar = new Bar(windowWidth/2,windowHeight/2);
boxes.push(new Box(0,50,350,350))
boxes.push(new Box(450,50,350,350))
boxes.push(new Box(850,50,350,350))
boxes.push(new Box(0,450,350,350))
boxes.push(new Box(450,450,350,350))
boxes.push(new Box(850,450,350,350))
imageMode(CENTER);
cursor = loadImage('../assets/images/cursor.png');
}


// draw()
//
// Description of draw()

function draw() {
noCursor();
background(255);
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
