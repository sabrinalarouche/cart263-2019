"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let leftDoor;
let rightDoor;
let order;
//Array of bad images
let bad = [
"bad1.png",
"bad2.png",
"bad3.png",
"bad4.png",
"bad5.png",
"bad6.png",
"bad7.png",
"bad8.png",
"bad9.png",
"bad10.png"
];

let badPhrase= [
  "drugs are good",
  "skip school"
];

//Array of good images
let good= [
"good1.png",
"good2.png",
"good3.png",
"good4.png",
"good5.png",
"good6.png",
"good7.png",
"good8.png",
"good9.png",
"good10.png"
];

let goodPhrase= [
  "respect your parents",
  "do your homework"
]
//Array of door images
let door= [
"door1.png",
"door2.png",
"door3.png",
"door4.png",
"door5.png",
"door6.png"
];
$(document).ready(setup);

function setup() {
  leftDoor = $('#leftDoor');
  rightDoor = $('#rightDoor');
  newRound();
}

function newRound(){
  leftDoor.attr('src','assets/images/' + door[Math.floor(Math.random() * door.length)]);
  //left door is clickable
  leftDoor.on("click", function(){
  //When left door is click, it changes to an image and right door can't be clicked
  rightDoor.off("click");
  //at random, the image will either be good or bad.
  let r = Math.random();
  if (r > .5)
  {
  leftDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
  responsiveVoice.speak(badPhrase[Math.floor(Math.random() * badPhrase.length,"UK English Male")]);
  }
  else {
  leftDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
    responsiveVoice.speak(goodPhrase[Math.floor(Math.random() * goodPhrase.length,"UK English Male")]);
  }
  //once it is clicked once, can't be clicked again (when clicked after image appeared, image would change)
  leftDoor.off("click");
  setTimeout(newRound, 5000);
});
  rightDoor.attr('src','assets/images/' + door[Math.floor(Math.random() * door.length)]);
  //right door clickable
  rightDoor.on("click", function(){
//When right door is click, it changes to an image and left door can't be clicked
  leftDoor.off("click");
  //at random, the image will either be good or bad.
  let r = Math.random();
    if (r > .5)
    {
    rightDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
    responsiveVoice.speak(badPhrase[Math.floor(Math.random() * badPhrase.length,"UK English Male")]);
    }
    else {
    rightDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
    responsiveVoice.speak(goodPhrase[Math.floor(Math.random() * goodPhrase.length,"UK English Male")]);
    }
  //once it is clicked once, can't be clicked again (when clicked after image appeared, image would change)
    rightDoor.off("click");
    setTimeout(newRound, 5000);
  });

}
