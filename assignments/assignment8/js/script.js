"use strict";

/*****************

Project 3 prototype
Sabrina Larouche

This is the beginning phases of my final project which will explore a net neutral world.
This is a world of paid websites which are slow, have a lots of waiting for loading pages, glitches and errors.
Project 3 will continue on this basic prototype by adding a website linking to other pages which will be "paid" for.

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
boxes.push(new Box(0,0,500,500))
boxes.push(new Box(502,0,500,500))
boxes.push(new Box(1002,0,500,500))
boxes.push(new Box(0,502,500,500))
boxes.push(new Box(502,502,500,500))
boxes.push(new Box(1002,502,500,500))
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
/* function move() {
  let elem = document.getElementById("myBar");
  let width = 1;
  let id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
*/
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
