class Box {
  constructor(x,y,width,height,logo) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.logo = logo;
    this.tint = color(255);
  }

display(){
  imageMode(CORNER);
  this.overlap();
  tint(this.tint);
  image(this.logo,this.x,this.y,this.width,this.height);
//  rect(this.x,this.y,this.width,this.height);
}

overlap(){
  if(cursorX > this.x && cursorX < this.x + this.width && cursorY > this.y && cursorY < this.y + this.height ){
  this.tint = color(255,0,0);
  }
  else {
  this.tint = color(255);
  }

}
}
