"use strict";

/*****************

Title of Project
Sabrina Larouche

This is a template. You must fill in the title,
author, and this description to match your project!

Sources:
Fork image: https://vector.me/browse/352861/fork
Meatball image: https://pixy.org/1176356/
Mouth image: https://pngtree.com/freepng/cartoon-open-ones-mouth-illustration_3509559.html
Bowl image: https://www.kissclipart.com/pasta-png-clipart-spaghetti-with-meatballs-pasta-i-oxjscd/
Audio: http://www.pacdv.com/sounds/

******************/
let fork;
let mouth;
let meatball;

$(document).ready(setup);

function setup() {
  fork = $('#fork');
  mouth = $('#mouth');
  meatball = $('#meatball');

  //fork moves with draggable
  fork.draggable();
  meatball.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: meatballDropped
  });

}

function meatballDropped (event,ui) {
  ui.draggable.remove(); // $fly.remove() would work here too
  $(this).attr('src','assets/images/combo.png');
  $(this).attr('id','revealed');
  $(this).draggable();

}
