"use strict";

/*****************

Title of Project
Sabrina Larouche

This is a template. You must fill in the title,
author, and this description to match your project!

Sources:
Fork image: https://vector.me/browse/352861/fork
Mouth image: https://pngtree.com/freepng/cartoon-open-ones-mouth-illustration_3509559.html
Bowl image: https://www.kissclipart.com/pasta-png-clipart-spaghetti-with-meatballs-pasta-i-oxjscd/

******************/
let fork;
let mouth;

$(document).ready(setup);
function setup() {
fork = $('#fork');
mouth = $('#mouth');
//fork moves with draggable
fork.draggable();
}
