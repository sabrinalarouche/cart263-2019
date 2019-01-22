"use strict";

/*****************

OOP Circle Eater
Sabrina Larouche

******************/

// Constants for key quantities
const AVATAR_MAX_SIZE = 100;
const AVATAR_SIZE_LOSS_PER_FRAME = 1;
const FOOD_MIN_SIZE = 5;
const FOOD_MAX_SIZE = 100;

// Variables to store the two key objects
let agents = [];
// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, avatar, and food, disable the cursor

function setup() {
  createCanvas(windowWidth,windowHeight);
  agents.push(new Avatar(mouseX,mouseY,AVATAR_MAX_SIZE,AVATAR_SIZE_LOSS_PER_FRAME));
  for (let i = 0; i < 15; i++){
  agents.push(new Food(random(0,width),random(0,height),random(2,5),random(2,5),FOOD_MIN_SIZE,FOOD_MAX_SIZE));
  }
  noCursor();
}


// draw()
//
// Clear the background
// Update the avatar and check for eating
// Display the avatar and food

function draw() {
  background(0);
  for (let i = 0; i < agents.length; i++) {
      agents[i].update();
      agents[i].display();
    }

      for (let i = 1; i < agents.length; i++) {

  if (agents[0].collide(agents[i])) {
    agents[0].eat(agents[i]);
  }
}

}
