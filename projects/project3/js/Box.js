class Box {
  constructor(x,y,width,height,logo,url) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.logo = logo;
    this.tint = color(255);
    this.amount = nf(random(14,100)/5,1,2);
    this.text = 'To Access: ' +this.amount +'$';
    this.url = url;
  }

  display(){
    imageMode(CORNER);
    tint(this.tint);
    image(this.logo,this.x,this.y,this.width,this.height);
    this.overlap();
  }

  overlap(){
    if(cursorX > this.x && cursorX < this.x + this.width && cursorY > this.y && cursorY < this.y + this.height ){
      this.tint = color(255,100);
      fill(255);
      textAlign(CENTER);
      textSize(windowWidth/60);
      text(this.text,this.x + this.width/2, this.y + this.height/2);

    }
    else {
      this.tint = color(255);
    }
  }
  clicked(){
      playing =false;
      if(cursorX > this.x && cursorX < this.x + this.width && cursorY > this.y && cursorY < this.y + this.height ){
      if (initialBalance - this.amount > 0){
        initialBalance -= this.amount;
      let scenario = floor(random(0,4));
      if (scenario == 0){
      window.location.href = this.url;
      }
      else if(scenario ==1){
      state = "INFINITYLOADING";
      }
      else if(scenario == 2){
        alert("Error: Page can't be accessed. Try again later.");
      }
      else if(scenario ==3){
        state = "ARTICLE";
      }
      }
      else {
        alert("Error: Out of Funds.");

      }
    }
  }
}
