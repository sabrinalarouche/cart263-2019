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

let badPhrase= [
  "drugs are good",
  "skip school",
  "kill",
  "praise satan",
  "parents suck",
  "fuck isn't a bad word"
];

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

let goodPhrase= [
  "respect your parents",
  "do your homework",
  "eat your vegetables",
  "listen to adults",
  "do your best",
  "be nice to others",
  "don't swear"
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

let goodBackground= [
  "goodb1.jpg",
  "goodb2.jpg",
  "goodb3.png",
  "goodb4.png"
];

$(document).ready(setup);

function setup() {
  leftDoor = $('#leftDoor');
  rightDoor = $('#rightDoor');

  newRound();
}

function newRound(){
  $('body').css('background-image','url(assets/images/wall.jpg)');
  rightDoor.show();
  leftDoor.show();
  leftDoor.attr('src','assets/images/' + door[Math.floor(Math.random() * door.length)]);
  //left door is clickable
  leftDoor.on("click", function(){
    //When left door is click, it changes to an image and right door can't be clicked
    rightDoor.off("click");
    //at random, the image will either be good or bad.
    let r = Math.random();
    if (r > .5)
    {
      $('body').css('background-image','url(assets/images/badBackground/' + badBackground[Math.floor(Math.random() * badBackground.length)]+')');
      leftDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
      responsiveVoice.speak(badPhrase[Math.floor(Math.random() * badPhrase.length,"UK English Male")]);
    }
    else {
      $('body').css('background-image','url(assets/images/goodBackground/' + goodBackground[Math.floor(Math.random() * goodBackground.length)]+')');
      leftDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
      responsiveVoice.speak(goodPhrase[Math.floor(Math.random() * goodPhrase.length,"UK English Male")]);
    }
    //once it is clicked once, can't be clicked again (when clicked after image appeared, image would change)
    leftDoor.off("click");
    rightDoor.hide();
    setTimeout(newRound, 3000);
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
      $('body').css('background-image','url(assets/images/badBackground/' + badBackground[Math.floor(Math.random() * badBackground.length)]+')');
      rightDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
      responsiveVoice.speak(badPhrase[Math.floor(Math.random() * badPhrase.length,"UK English Male")]);
    }
    else {
      $('body').css('background-image','url(assets/images/goodBackground/' + goodBackground[Math.floor(Math.random() * goodBackground.length)]+')');
      rightDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
      responsiveVoice.speak(goodPhrase[Math.floor(Math.random() * goodPhrase.length,"UK English Male")]);
    }
    //once it is clicked once, can't be clicked again (when clicked after image appeared, image would change)
    rightDoor.off("click");
    leftDoor.hide();
    setTimeout(newRound, 3000);
  });

}
