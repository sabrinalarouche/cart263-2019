"use strict";

/*****************

Kids 50/50
Sabrina Larouche

Images all from google
******************/

let leftDoor;
let rightDoor;
let order;
let background;

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
//Array of bad phrases
let badPhrase= [
  "drugs are good",
  "skip school",
  "kill",
  "praise satan",
  "parents suck",
  "fuck isn't a bad word",
  "steal",
  "lying is ok",
  "only losers tell"
];

//Array of bad image backgounds
let badBackground= [
  "black.png",
  "badb1.png",
  "badb2.png",
  "badb3.png"
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
//Array of good phrases
let goodPhrase= [
  "respect your parents",
  "do your homework",
  "eat your vegetables",
  "listen to adults",
  "do your best",
  "be nice to others",
  "don't swear",
  "tell the truth",
  "talk to an adult",
  "never steal"
]

//Array of good image backgrounds
let goodBackground= [
  "goodb1.jpg",
  "goodb2.jpg",
  "goodb3.png",
  "goodb4.png"
];

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
  //call the function newRound
  newRound();
}

function newRound(){
  //Start of each round
  //brick wall background shows
  $('body').css('background-image','url(assets/images/wall.jpg)');
  //both doors show
  rightDoor.show();
  leftDoor.show();
  //the image of the left door will be selected from an array of door images
  leftDoor.attr('src','assets/images/' + door[Math.floor(Math.random() * door.length)]);
  //Once the left door is clicked
  leftDoor.on("click", function(){
    //it changes to an image and right door can't be clicked.
    rightDoor.off("click");
    //at random, the image will either be good or bad.
    let r = Math.random();
    if (r > .5)
    {
      //bad image with bad phrase and bad background selected from arrays
      $('body').css('background-image','url(assets/images/badBackground/' + badBackground[Math.floor(Math.random() * badBackground.length)]+')');
      leftDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
      responsiveVoice.speak(badPhrase[Math.floor(Math.random() * badPhrase.length)],"UK English Male", {rate: 0.5 });
    }
    else {
      // or a good image with a good phrase and good background selected from array
      $('body').css('background-image','url(assets/images/goodBackground/' + goodBackground[Math.floor(Math.random() * goodBackground.length)]+')');
      leftDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
      responsiveVoice.speak(goodPhrase[Math.floor(Math.random() * goodPhrase.length)],"US English Female", {pitch: 1.5});
    }
    //once it is clicked once, can't be clicked again (when clicked after image appeared, image would change)
    leftDoor.off("click");
    //right door will be hidden when the left is clicked
    rightDoor.hide();
    //This function will occur for 3 seconds and then restarts.
    setTimeout(newRound, 3000);
  });

  //the image of the right door will be selected from an array of door images
  rightDoor.attr('src','assets/images/' + door[Math.floor(Math.random() * door.length)]);
  //When the right door is clicked
  rightDoor.on("click", function(){
    //it changes to an image and left door can't be clicked
    leftDoor.off("click");
    //at random, the image will either be good or bad.
    let r = Math.random();
    if (r > .5)
    {
      //bad image with bad phrase and bad background selected from arrays
      $('body').css('background-image','url(assets/images/badBackground/' + badBackground[Math.floor(Math.random() * badBackground.length)]+')');
      rightDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
      responsiveVoice.speak(badPhrase[Math.floor(Math.random() * badPhrase.length)],"UK English Male", {rate: 0.5 });
    }
    // or a good image with a good phrase and good background selected from array
    else {
      $('body').css('background-image','url(assets/images/goodBackground/' + goodBackground[Math.floor(Math.random() * goodBackground.length)]+')');
      rightDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
      responsiveVoice.speak(goodPhrase[Math.floor(Math.random() * goodPhrase.length)],"US English Female",{pitch: 1.5});
    }
    //once it is clicked once, can't be clicked again (when clicked after image appeared, image would change)
    rightDoor.off("click");
    //left door will be hidden when the right is clicked
    leftDoor.hide();
    //This function will occur for 3 seconds and then restarts.
    setTimeout(newRound, 3000);
  });

}
