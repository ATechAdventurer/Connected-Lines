var ring = [];
var looping = true;
var distance = 100;
var ds = 0.2;

function setup() {
  createCanvas(800,600);
  background(25);
  for(var i = 0; i < 28; i++){
    ring.push(new Ring()); 
  }
}

function mouseClicked(){
  var r = new Ring();
  r.pos.x = mouseX;
  r.pos.y = mouseY;
  ring.push(r);
  if(looping){
    looping = false;
    noLoop();
  }else{
    looping = true;
    loop();
  }
}

function draw() {
  background(25);
  for(var z = 0; z < ring.length; z++ ){
    ring[z].show();
    ring[z].update();
  }
  
  for(var i = 0; i < ring.length; i++ ){
    for(var j = 0; j < ring.length; j++ ){
      if(dist(ring[i].pos.x,ring[i].pos.y,ring[j].pos.x,ring[j].pos.y) < distance){
        var dis = dist(ring[i].pos.x,ring[i].pos.y,ring[j].pos.x,ring[j].pos.y);
        var alph = map(dis,distance,0,0,255);
        
        strokeWeight(2);
        stroke(255,alph,200,alph);
        line(ring[i].pos.x,ring[i].pos.y,ring[j].pos.x,ring[j].pos.y);
      }
    }  
  }
}

function keyPressed(){
  if(keyCode == UP){
    distance += 5;
  }else if(keyCode == DOWN){
    distance -= 5;
  }
}