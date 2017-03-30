var Ring = function(){
  this.pos = createVector(random(0,width),random(0,height));
  this.xspeed = random(0,0.5);
  this.t = createVector(random(0,width),random(0,height));
  
  this.show = function(){
    noFill();
    stroke(0,0);
    strokeWeight(4);
    ellipse(this.pos.x,this.pos.y,30,30);
  }
  
  this.update = function(){
    this.t.x += 0.005;
    this.t.y += 0.005;
    this.pos.x = noise(this.t.x);
    this.pos.y = noise(this.t.y);
    this.pos.y = map(this.pos.y,0,1,0,height);
    this.pos.x = map(this.pos.x,0,1,0,width);
  }
};