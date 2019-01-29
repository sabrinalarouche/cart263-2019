"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

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
