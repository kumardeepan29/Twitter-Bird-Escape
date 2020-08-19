//function pipe
function pipe(){
  
  var spacing= random(50,height/2);
  var centery= random(spacing,height-spacing);
  this.top=centery - (spacing/2);
  this.bottom=height -(centery + spacing/2);
  this.x=width;
  this.w=30;
  this.speed=2;
  this.highlight=false;

//hitscheck function
  this.hits= function(twitterbird){
    if(twitterbird.y<this.top || twitterbird.y>height-this.bottom){
if(twitterbird.x>this.x&&twitterbird.x<this.x+this.w){
  this.highlight=true;
   return true; 
}}
    
    
}
  
  
  
//show function
  this.show=function(){
    
   
fill('#27b2f2');
    if(this.highlight){
      fill(255,0,0);
    }
 
 rect(this.x,0,this.w,this.top);
 rect(this.x,height-this.bottom,this.w,this.bottom);
  } 
  
//update function
    this.update= function(){
      this.x-=this.speed;
  }
  
//offscreen function   
  this.offscreen=function(){
    if(this.x<-this.w){
      return true;
    }
    else return false;
    
  }
  
}