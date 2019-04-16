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
let article;
let playing =false;

function preload() {
article = loadJSON('data/data.json');
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

  boxes.push(new Box(windowWidth/5,windowHeight/5,windowWidth/5,windowWidth/5,logos[0],'https://www.netflix.com/ca/'));
  boxes.push(new Box(windowWidth/5*2,windowHeight/5,windowWidth/5,windowWidth/5,logos[1],'https://www.instagram.com/'));
  boxes.push(new Box(windowWidth/5*3,windowHeight/5,windowWidth/5,windowWidth/5,logos[2],'https://www.facebook.com/'));
  boxes.push(new Box(windowWidth/5,windowWidth/5+windowHeight/5,windowWidth/5,windowWidth/5,logos[3],'https://www.youtube.com/'));
  boxes.push(new Box(windowWidth/5*2,windowWidth/5+windowHeight/5,windowWidth/5,windowWidth/5,logos[4],'https://www.google.com/maps'));
  boxes.push(new Box(windowWidth/5*3,windowWidth/5+windowHeight/5,windowWidth/5,windowWidth/5,logos[5],'https://www.google.com/'));
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

    case "INFINITYLOADING":
    {

      imageMode(CENTER);
      displayLoading();
      break;
    }

    case "ARTICLE":
    {

      displayArticle();
      break;
    }
    noCursor();
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
    textSize(windowWidth/40);
    text('Account Balance: ' + nf(initialBalance,1,2) +'$',windowWidth/5,windowHeight/8);
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

  function mouseClicked(){
    for(let i = 0; i < boxes.length; i ++){
    boxes[i].clicked();
    }
  }

  function displayArticle(){
if(playing ===false){
  let articleConcat = "";
  for(let i =0; i< article.article.length; i++){
  articleConcat+=article.article[i];
}
    responsiveVoice.speak( articleConcat, "UK English Male", {volume: 1});
    playing =true;
}
  fill(255);
  textAlign(LEFT);
  textSize(18);
  for(let i =0; i< article.article.length; i++){
    text(article.article[i],width/5,height/3+(i*20));
    console.log("text::"+ article.article[i]);
}

}
