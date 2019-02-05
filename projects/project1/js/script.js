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
let revealed;

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
  mouth.droppable({
    drop: mouthDropped
  });

}

function meatballDropped (event,ui) {
  //ui.draggable.remove(); // $fly.remove() would work here too
  ui.draggable.hide();
  $(this).attr('src','assets/images/combo.png');
  $(this).attr('id','revealed');
  $(this).draggable();
  $(this).css({
    top:"30%",
    left:0
  });

}
function mouthDropped (event,ui) {
  ui.draggable.hide(); // $fly.remove() would work here too
  //fork.parent().append('<img id="fork" src="assets/images/fork.png">')
  fork.show();
  fork.css({top:0, left:0});
  meatball.attr('src','assets/images/meatball.png');
  meatball.attr('id','meatball');
  meatball.css({top:35, right:35});
  meatball.show();
  meatball.animate({
    top:"55%",
    left:0
  },2500);
  console.log(meatball.css("bottom"));
  meatball.draggable('destroy');
  meatball.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: meatballDropped
  });
}
