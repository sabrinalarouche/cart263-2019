"use strict";

/*****************

OOP Circle Eater
Sabrina Larouche

******************/

// Constants for key quantities
const AVATAR_MAX_SIZE = 64;
const AVATAR_SIZE_LOSS_PER_FRAME = 1;
const FOOD_MIN_SIZE = 5;
const FOOD_MAX_SIZE = 100;

// Variables to store the two key objects
let avatar;
let food;


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
  avatar = new Avatar(mouseX,mouseY,AVATAR_MAX_SIZE,AVATAR_SIZE_LOSS_PER_FRAME)
  food = new Food(random(0,width),random(0,height),5,5,FOOD_MIN_SIZE,FOOD_MAX_SIZE);
  noCursor();
}


// draw()
//
// Clear the background
// Update the avatar and check for eating
// Display the avatar and food

function draw() {
  background(0);

  avatar.update();
  if (avatar.collide(food)) {
    avatar.eat(food);
  }
  avatar.display();
  food.display();
  food.update();
}
