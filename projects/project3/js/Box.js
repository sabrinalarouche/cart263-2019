class Box {
  constructor(x,y,width,height,logo,url) {
    //Variables
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.logo = logo;
    this.tint = color(255);
    this.amount = nf(random(14,100)/3,1,2);
    this.text = 'To Access: ' +this.amount +'$';
    this.url = url;
  }

  display(){
    //Define how the boxes will look
    imageMode(CORNER);
    tint(this.tint);
    image(this.logo,this.x,this.y,this.width,this.height);
    //Call overlap function
    this.overlap();
  }

  overlap(){
    //Check if the fake cursor overlaps a box
    if(cursorX > this.x && cursorX < this.x + this.width && cursorY > this.y && cursorY < this.y + this.height ){
      //Change opacity of box
      this.tint = color(255,100);
      // Display cost to access the site
      fill(255);
      textAlign(CENTER);
      textSize(windowWidth/60);
      text(this.text,this.x + this.width/2, this.y + this.height/2);
    }
    else {
      // When the fake cursor isn't over a box, no cost or opacity change
      this.tint = color(255);
    }
  }
  // When the fake cursor clicks one of the boxes
  clicked(){
    playing =false;
    //Checks if it is overlapping
    if(cursorX > this.x && cursorX < this.x + this.width && cursorY > this.y && cursorY < this.y + this.height ){
      //When it is clicked, the account balance decreases by the cost
      if (initialBalance - this.amount > 0){
        initialBalance -= this.amount;
        //A scenario will occur at random
        let scenario = floor(random(0,4));
        // The real url associated with the image will load
        if (scenario == 0){
          window.location.href = this.url;
        }
        // A loading page that doesn't go and loads over and over again will appear
        else if(scenario ==1){
          state = "INFINITYLOADING";
        }
        // An alert will appear and page won't be accessed
        else if(scenario == 2){
          alert("Error: Page can't be accessed. Try again later.");
        }
        // The random page will appear
        else if(scenario ==3){
          state = "ARTICLE";
        }
      }
      else {
        //When the account balance is less than the cost, an alert appears
        alert("Error: Out of Funds.");

      }
    }
  }
}
