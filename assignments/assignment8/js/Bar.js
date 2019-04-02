class Bar {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.lengthX = 200;
    this.lengthY = 20;
    this.loading = 0;
  }

progress(){
  fill(0);
  rect(this.x-this.lengthX/2,this.y+150,this.lengthX,this.lengthY);
  fill(255,0,0);
  rect(this.x-this.lengthX/2,this.y+150,this.loading,this.lengthY);

if(this.loading < this.lengthX ){
  this.loading += 100;
}
else{
  state = "START";
}
}
}
