class Bar {
  //Variables
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.lengthX = 200;
    this.lengthY = 20;
    this.loading = 0;
  }

  progress(){
    //Appearance of the bar
    fill(0);
    rect(this.x-this.lengthX/2,this.y+150,this.lengthX,this.lengthY);
    fill(255,0,0);
    rect(this.x-this.lengthX/2,this.y+150,this.loading,this.lengthY);
    //Have the red rectangle grow until it reaches the length of the white one
    if(this.loading < this.lengthX ){
      this.loading += 1;
    }
    else{
      //Scenario 1 laoding page that never goes anywhere and keeps loading over and over again
      if(state == "INFINITYLOADING"){
        this.loading = 0;
      }
      else{
        state = "START";
      }
    }
  }
}
