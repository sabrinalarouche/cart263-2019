"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
//Variables
let bar;
let globe;
//Boxes array
let boxes = [];
// First initial state
let state = "LOADING";
// Fake cursor variables
let cursor;
let cursorX = 0;
let cursorY = 0;
// Logo array
let logos = [];
// Balance in the left corner's initial amount
let initialBalance = 200;
let article;
//Sound doesn't start until "ARTICLE" case
let playing =false;

// to hold article line objects
let lines = [];
// font and fontSize variable
let font;
let fontSize;

function preload() {
  //Extract the article info from exterior file
  article = loadJSON('data/data.json');
  //Load the font
  font = loadFont('assets/SourceSansPro-Regular.otf');
}


// setup()
//
// Description of setup

function setup() {
  // set up the font and fontSize
  textFont(font);
  fontSize = windowWidth/110;

  createCanvas(windowWidth,windowHeight);
  globe = new Globe(windowWidth/2,windowHeight/2);
  bar = new Bar(windowWidth/2,windowHeight/2);

  //Put each logo's image into an array
  logos.push(loadImage("../assets/images/logos/logo1.png"));
  logos.push(loadImage("../assets/images/logos/logo2.png"));
  logos.push(loadImage("../assets/images/logos/logo3.png"));
  logos.push(loadImage("../assets/images/logos/logo4.png"));
  logos.push(loadImage("../assets/images/logos/logo5.png"));
  logos.push(loadImage("../assets/images/logos/logo6.png"));

  //Create 6 boxes with different positions, same width/height, an image from logos array, and url associated with icon (for scenario 0)
  boxes.push(new Box(windowWidth/5,windowHeight/5,windowWidth/5,windowWidth/5,logos[0],'https://www.netflix.com/ca/'));
  boxes.push(new Box(windowWidth/5*2,windowHeight/5,windowWidth/5,windowWidth/5,logos[1],'https://www.instagram.com/'));
  boxes.push(new Box(windowWidth/5*3,windowHeight/5,windowWidth/5,windowWidth/5,logos[2],'https://www.facebook.com/'));
  boxes.push(new Box(windowWidth/5,windowWidth/5+windowHeight/5,windowWidth/5,windowWidth/5,logos[3],'https://www.youtube.com/'));
  boxes.push(new Box(windowWidth/5*2,windowWidth/5+windowHeight/5,windowWidth/5,windowWidth/5,logos[4],'https://www.google.com/maps'));
  boxes.push(new Box(windowWidth/5*3,windowWidth/5+windowHeight/5,windowWidth/5,windowWidth/5,logos[5],'https://www.google.com/'));
  // Image is in the center of the box
  imageMode(CENTER);

  //Image for fake cursor that follows behind real cursor
  cursor = loadImage('../assets/images/cursor.png');

  //Create line objects
  for(let i =0; i< article.article.length; i++){
    lines.push(new ArticleLine(article.article[i],windowWidth/2,windowHeight/3+(i*30)))

  }
}

function draw() {
  //Hide real cursor
  noCursor();
  background(0);
  //Changed between states
  switch (state) {
    // Different states
    //Initial loading state
    case "LOADING":
    {
      displayLoading();
      break;
    }
    //Page with different boxes, account balance, fake cursor
    case "START":
    {
      displayStart();
      break;
    }
    // Scenario 1 state, loading page that never goes anywhere
    case "INFINITYLOADING":
    {
      imageMode(CENTER);
      displayLoading();
      break;
    }
    //Scenario 3 state, random page that reads an article about Net Neutrality
    case "ARTICLE":
    {
      displayArticle();
      break;
    }
  }
}
//Initial loading state
function displayLoading(){
  globe.display();
  globe.move();
  bar.progress();
}

//Start page
function displayStart(){
  push();
  //Account balance text
  fill(255,0,0);
  textAlign(CENTER);
  textSize(windowWidth/50);
  text('Account Balance: ' + nf(initialBalance,1,2) +'$',windowWidth/5,windowHeight/8);
  pop();
  // display the boxes
  for(let i = 0; i < boxes.length; i ++){
    boxes[i].display();
  }
  //call function for the fake cursor
  fakeCursor();
}


function fakeCursor(){
  // fake cursor is an image of a cursor that follows the hidden cursor's position but slower
  cursorX = lerp(cursorX,mouseX, 0.03);
  cursorY = lerp(cursorY,mouseY, 0.03);
  // fake cursor image
  image(cursor,cursorX,cursorY);
}

function mouseClicked(){
  // If the fake cursor clicks a box, it triggers the clicked function
  for(let i = 0; i < boxes.length; i ++){
    boxes[i].clicked();
  }
}
//Displays the article for scenario 3
function displayArticle(){
  //Prepare the article for the responsiveVoice and activate responsiveVoice, only once
  if(playing ===false){
    // Merging the article array together
    let articleConcat = "";
    for(let i =0; i< article.article.length; i++){
      articleConcat+=article.article[i];
    }
    //responsiveVoice that reads the article
    responsiveVoice.speak( articleConcat, "UK English Male", {volume: 1});
    playing =true;
  }
  // Display the article's text
  fill(255);
  textAlign(LEFT);
  textSize(fontSize);
  //Display each article line and activate mouse jitter
  for(let i =0; i< article.article.length; i++){
    lines[i].display();
  }
}
