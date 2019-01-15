// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Food extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,vx,vy,minSize,maxSize) {
    super(x,y,random(minSize,maxSize),'#55cccc');
    this.vx = vx;
    this.vy = vy;
    this.minSize = minSize;
    this.maxSize = maxSize;
  }

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
  }

  update() {
//move
  this.x += this.vx;
  this.y += this.vy;
//wrap screen
  if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }

    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }
}
