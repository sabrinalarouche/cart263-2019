class Globe {
  constructor(x,y) {
  //Variables
    this.x = x;
    this.y = y;
    this.vy = -0.5;
    this.originX = windowWidth/2;
    this.originY = windowHeight/2;
    this.bounce = 50;
    this.image = loadImage('../assets/images/globe.png');
  }

  display() {
  //Globe is an image
      image(this.image,this.x,this.y);
    }

  move(){
  //Move the globe image up and down
    this.y += this.vy;
  if(this.y < this.originY - this.bounce){
    this.vy = -this.vy;
  }
  else if (this.y > this.originY){
    this.vy = -this.vy;
  }
  }
}
