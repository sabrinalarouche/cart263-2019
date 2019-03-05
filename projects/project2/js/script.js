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
let bad = [
"bad1.png",
"bad2.png",
"bad3.png",
"bad4.png"
];

let good= [
"good1.png",
"good2.png",
"good3.png",
"good4.png"
];

$(document).ready(setup);

function setup() {

  leftDoor = $('#leftDoor');
  rightDoor = $('#rightDoor');

  leftDoor.on("click", function(){
  let r = Math.random();
  if (r > .5)
  {
  leftDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
  }
  else {
  leftDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
  }
  });

  rightDoor.on("click", function(){
  let r = Math.random();
    if (r > .5)
    {
    rightDoor.attr('src','assets/images/bad/' + bad[Math.floor(Math.random() * bad.length)]);
    }
    else {
    rightDoor.attr('src','assets/images/good/' + good[Math.floor(Math.random() * good.length)]);
    }
  });
}
