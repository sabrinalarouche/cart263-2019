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
let cursorX;
let cursorY;
let x= 0;
let y= 0;
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
boxes[0].display();
}

function fakeCursor(){

cursor = lerp(x,y,mouseX,mouseY, 0.05);
cursor = lerp(y, mouseY, 0.05);

}
