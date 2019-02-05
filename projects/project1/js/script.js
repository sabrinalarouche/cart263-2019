"use strict";

/*****************

Meat Me Halfway
Sabrina Larouche

Sources:
Fork image: https://vector.me/browse/352861/fork
Meatball image: https://pixy.org/1176356/
Mouth image: https://pngtree.com/freepng/cartoon-open-ones-mouth-illustration_3509559.html
Bowl image: https://www.kissclipart.com/pasta-png-clipart-spaghetti-with-meatballs-pasta-i-oxjscd/

******************/
//Variables
let fork;
let mouth;
let meatball;
let revealed;
let spitSFX = new Audio("assets/sounds/spit.wav");

$(document).ready(setup);

function setup() {
  //defining variables
  fork = $('#fork');
  mouth = $('#mouth');
  meatball = $('#meatball');
  //audio loop
  spitSFX.loop = false;
  //fork moves with draggable
  fork.draggable();
  //meatball identifies when something is dropped onto it
  meatball.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: meatballDropped
  });
  //mouth identifies when something is dropped onto it
  mouth.droppable({
    drop: mouthDropped
  });
  // audio will play when something is dropped onto mouth
    mouth.on('mousedown',function () {
    spitSFX.play();
  });

}

function meatballDropped (event,ui) {
//when fork overlaps meatball, fork and meatball are hidden and replaced by an image of the meatball on the fork
  ui.draggable.hide();
//image it will be changed to
  $(this).attr('src','assets/images/combo.png');
//changing the new images id from 'this' to revealed
  $(this).attr('id','revealed');
//make new image draggable with a delay when first moved
  $(this).draggable({
                delay: 300
        });
//position of the new image
  $(this).css({
    top:"30%",
    left:0
  });

}
function mouthDropped (event,ui) {
//When the fork with the meatball overlaps the mouth, it is hidden
  ui.draggable.hide();
//the empty fork reappears
  fork.show();
//located in its initial starting position
  fork.css({top:0, left:0});
//the meatball alone will appear
  meatball.attr('src','assets/images/meatball.png');
//redefining the meatballs id
  meatball.attr('id','meatball');
//positioning the meatball over the mouth
  meatball.css({top:35, right:35});
  meatball.show();
//audio effect occurs
  spitSFX.play();
//meatball will be "spit" across the screen, from its position on the mouth to the plate.
  meatball.animate({
    top:"55%",
    left:0
  //duration of animation
  },2500);
//disabling the spit out meatball from being draggable
  meatball.draggable('destroy');
//reloading the original droppable meatball
  meatball.droppable({
    drop: meatballDropped
  });
}
