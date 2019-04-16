class Box {
  constructor(x,y,width,height,logo) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.logo = logo;
    this.tint = color(255);
    this.amount = nf(random(14,100)/5,1,2);
    this.text = 'To Access: ' +this.amount +'$';
  }

  display(){
    imageMode(CORNER);
    tint(this.tint);
    image(this.logo,this.x,this.y,this.width,this.height);
    this.overlap();
    //  rect(this.x,this.y,this.width,this.height);
  }

  overlap(){
    if(cursorX > this.x && cursorX < this.x + this.width && cursorY > this.y && cursorY < this.y + this.height ){
      this.tint = color(255,100);
      fill(255);
      textAlign(CENTER);
      textSize(25);
      text(this.text,this.x + this.width/2, this.y + this.height/2);
      if(mouseIsPressed){
        this.clicked();
      }
    }
    else {
      this.tint = color(255);
    }
  }
  clicked(){
    if (initialBalance - this.amount > 0){
      initialBalance -= this.amount;
    }
    else {
      alert("Error: Out of Funds");
    }
  }
}
