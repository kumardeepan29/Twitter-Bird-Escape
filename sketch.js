let twitterbird;
let tImg;
let bImg;
let pipes=[];

function preload(){
  tImg=loadImage('twitterbird.png');
}

function setup() {
  createCanvas(400, 400);
  twitterbird=new Twitterbird();
  pipes.push(new pipe());
  
  
}
function keyPressed(){
  if(key== ' '){
    twitterbird.jump();
  }
  
}

function draw() {
  background(0);
  twitterbird.show();
  twitterbird.move();
  
  if(frameCount%100==0){
     pipes.push(new pipe()); 
  }
  
  for(var i=pipes.length-1   ;i>=0;i--)
  {
    pipes[i].show();
    pipes[i].update();
    
 //hit function
    if(pipes[i].hits(twitterbird)){
      console.log("hit");
    }
    
  if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
  }
}