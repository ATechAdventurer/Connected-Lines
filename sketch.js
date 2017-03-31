/*
* Cameron Steele
* Github: manosteele91827
*
* A Direct P5.js port of ceriwestcott's ConnectedLines project
*
* Based Off: https://github.com/ceriwestcott/ConnectedLines
* By ceriwestcott
*/
var ring = [];
var looping = true;
var distance = 100;
var ds = 0.2;
var colr = function(start,end,use){
  this.val = start;
  this.end = end;
  this.next = function(){
    if(this.val === this.end){
      this.val = 1;
    }else{
      this.val++;
    }
  };
  this.maybe = function(){
    if(random(0,1)){
      this.next();
    }
  }; 
  
}

var c1 = new colr(255,255,false);
var c2 = new colr(200,200,false);


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
        stroke(c1.val, alph, c2.val,alph);
        c1.next();
        c2.maybe();
        line(ring[i].pos.x,ring[i].pos.y,ring[j].pos.x,ring[j].pos.y);
      }
    }  
  }
}

function keyPressed(){
  if(keyCode == 38){
    distance += 5;
  }else if(keyCode == 40){
    distance -= 5;
  }
}