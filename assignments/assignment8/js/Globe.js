class Globe {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vy = -0.5;
    this.originX = windowWidth/2;
    this.originY = windowHeight/2;
    this.bounce = 50;
    this.image = loadImage('../assignment8/assets/images/globe.png');
  }

  display() {
      image(this.image,this.x,this.y);
    }

  move(){
    this.y += this.vy;
    console.log(this.y);
  if(this.y < this.originY - this.bounce){
    this.vy = -this.vy;
  }
  else if (this.y > this.originY){
    this.vy = -this.vy;
  }
  }
}
