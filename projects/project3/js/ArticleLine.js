class ArticleLine{
  //Inspired by https://p5js.org/examples/interaction-tickle.html
  constructor(articleText,x,y) {
  //Variables
    this.x = x;
    this.y = y;
    this.articleText = articleText;
    this.textColor  = color(random(255),random(255),random(255));

    // get the width and height of the text so we can center it initially
    this.bounds = font.textBounds(this.articleText, 0, 0, fontSize);
    this.x = x - this.bounds.w / 2;
    this.y = y - this.bounds.h / 2;
  }

  display() {
    // write the text in random colors and get its bounding box
      fill(this.textColor);
      text(this.articleText, this.x, this.y);
      this.bounds = font.textBounds(this.articleText, this.x, this.y, fontSize);
//Display fake cursor
      fakeCursor();
      // check if the mouse is inside the bounding box and jitter the line if so
      if (
        mouseX >= this.bounds.x &&
        mouseX <= this.bounds.x + this.bounds.w &&
        mouseY >= this.bounds.y &&
        mouseY <= this.bounds.y + this.bounds.h
      ) {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
      }
    }
}
