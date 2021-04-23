class Block extends BaseClass {
  constructor(x, y, width, height) {
    super(x, y, 30, 30);
    this.visiblity = 5;
  }
  display() {
    console.log(this.body.speed);
    if (this.body.speed < 5) {
      super.display();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5
      tint(255, this.visiblity);
      pop();
    }
  }
  score() {
    if (this.visiblity < 0 && this.visiblity > -225) {
      score++;
    }
  }
}