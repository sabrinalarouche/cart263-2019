"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let leftDoor;
let rightDoor;

$(document).ready(setup);

function setup() {
  leftDoor = $('#leftDoor');
  rightDoor = $('#rightDoor');

  leftDoor.on("click", function(){
    leftDoor.attr('src','assets/images/ghost.jpeg')
    //leftDoor.remove();

  console.log("remove");
  });

  rightDoor.on("click", function(){
    rightDoor.remove();
    console.log("remove");
  });
}
