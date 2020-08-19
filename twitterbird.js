class Twitterbird{
  constructor(){
    this.r=35;
    this.x=this.r;
    this.y=height-this.r;
    this.vy=0;
    this.gravity=0.6;
    }
  jump(){
    this.vy=-8;
  }
  move(){
    this.y+=this.vy;
    this.vy+=this.gravity;
    this.y+=0.9;
    this.y=constrain(this.y,0,height-this.r);
  }
  
  show(){
    image(tImg,this.x,this.y,this.r,this.r);
  }
}