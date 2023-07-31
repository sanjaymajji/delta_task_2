
var can = document.getElementById('canvas');
can.height = screen.height-30; 
can.width = screen.width-20;
var ctx = can.getContext('2d');
let X=0,Y=0;
let enemies_arr=[];
var m=[];
let t=[];
let Ox=[];
let Oy=[];
let z=[];
let k=0;
let cx=[];
let cy=[];
let bulb_add=[];
let stop_bull=[];
let test=0;
let u=[];
let home_x=838;
let home_y=596;
let health_count=0;
let x_=[];
let y_=[];
let ene_move=1;
let press_count=0;
var audio = new Audio('3NMV96L-bullet-by.mp3');

class enemy {
    constructor(){
        this.x = Math.floor(Math.random() * (1300 - 40 + 1)) + 40;
        this.y = 0;
        
    }
    move(){
        this.y += ene_move;
    }
    draw(){
      ctx.fillStyle="grey";
      ctx.fillRect(this.x, this.y, 20, 20);
    }
}

class bullets {

  constructor(){
    this.x;
    this.y;
  }
}



    let x=screen.width/2;
    let y=can.height-30;
    
  
 function move(){
    x+=X;
    y+=Y;
  }
 function draw(){
    ctx.beginPath();
    ctx.fillStyle = "rgb(71, 8, 90)";
    ctx.fillRect(0, 0, can.width, can.height);
    ctx.restore();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
  }
var ene=new enemy();
var bull=new bullets();
var bullet_arr=[];


function animate(){
  requestAnimationFrame(animate);
  draw();
  move();
  enemies_app();
  bullet_move();
  coll_detect();
  home();
  home_coll();
  health_bar();
  health_reduce();
  bulb_coll();
  score();
  score_entry();
}
animate();

function enemies_app(){
if((Math.random()*100)<3){

  
  enemies_arr.push(new enemy());
}
for (let i =0; i<enemies_arr.length; i++){
  enemies_arr[i].move();
  enemies_arr[i].draw();
}
}

document.addEventListener("mousedown", click_pos);
function click_pos(e) {
  

  
  
  cx[k] = e.clientX;
  cy[k] = e.clientY;
  x_[k]=x;
  y_[k]=y;
  m[k]=(y-cy[k])/(x-cx[k]);
 
  z[k]=1;

  k++;

 }
 function coll_detect(){


   for(let i=0;i<k;i++){
    for(let j=0;j<enemies_arr.length;j++){
  
      
      
  
      if((Math.abs(bullet_arr[i].x-enemies_arr[j].x)<40)&&(Math.abs(bullet_arr[i].y-enemies_arr[j].y)<40)){
        bullet_arr.splice(i,1);
        enemies_arr.splice(i, 1);
        u[test]=i;
        

        audio.play();
        

              test++;

              }
            }
          }

          
                  }
            
         
function bullet_move() {
  for(let i=0;i<k;i++){

    
      
      
      
        if((cx[i]-x_[i])>0){
          bullet_arr.push(new bullets());
          bullet_arr[i].y=y_[i]+z[i]*m[i]/Math.sqrt(1+m[i]*m[i]);
              bullet_arr[i].x=x_[i]+z[i]/Math.sqrt(1+m[i]*m[i]);
              
                stop_bull[i]=3;
               
              
          
        ctx.beginPath();
        ctx.arc(bullet_arr[i].x,bullet_arr[i].y , 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
              
              z[i]+=stop_bull[i];
            }
    
    
            
            else if((cx[i]-x_[i])<0){
              bullet_arr.push(new bullets());
              bullet_arr[i].y=y_[i]-z[i]*m[i]/Math.sqrt(1+m[i]*m[i]);
              bullet_arr[i].x=x_[i]-z[i]/Math.sqrt(1+m[i]*m[i]);
              
              
                stop_bull[i]=3;
              
              
    
              ctx.beginPath();
              ctx.arc(bullet_arr[i].x, bullet_arr[i].y, 10, 0, 2 * Math.PI);
              ctx.fillStyle = 'red';
              ctx.fill();
              
              z[i]+=stop_bull[i];
            }
    
          }
}
function home(){
  ctx.fillStyle="yellow";
    ctx.fillRect(830 ,590, 100,100 );
}

function home_coll(){

    for(let j=0;j<enemies_arr.length;j++){
      if((Math.abs(home_x-enemies_arr[j].x)<80)&&(Math.abs(home_y-enemies_arr[j].y)<80)){
        
        health_count++;
        enemies_arr.splice(j, 1);

        }
    }
  
}

function bulb_coll(){

  for(let j=0;j<enemies_arr.length;j++){
    if((Math.abs(x-enemies_arr[j].x)<20)&&(Math.abs(y-enemies_arr[j].y)<20)){
      
      health_count++;
      enemies_arr.splice(j, 1);
      

      }
  }

}

function health_bar(){
  ctx.fillStyle="green";
    ctx.fillRect(0, 0, 400,20 );
}
function health_reduce(){
  ctx.fillStyle="red";
    ctx.fillRect(400-2*health_count, 0, 2*health_count,20);

}
function score(){
  ctx.font = "24px Arial";
ctx.fillStyle = "black";

ctx.fillText("score",1251,20);
}
function score_entry(){
  ctx.font = "24px Arial";
ctx.fillStyle = "black";

ctx.fillText(test,1340,20);
}



//pause buttons

// function stop_pause_game(){
//   if((2*health_count==400)||){

//   }
// }
// document.addEventListener("mousedown", click_pause);
// function click_pause(e) {

//   press_count++;


//  }


document.addEventListener("keydown", function(KeyboardEvent) {
  if (KeyboardEvent.keyCode === 37) { 
  X=-1;

}
else if(KeyboardEvent.keyCode === 38){//UP ARROW
  Y=-1;
}
  else if (KeyboardEvent.keyCode === 39) { 
  X=1;
  
} 
else if(KeyboardEvent.keyCode === 40){
 Y=1;
}

});
 

document.addEventListener("keyup", function(KeyboardEvent) {
  if (KeyboardEvent.keyCode === 37) { 
  X=0;
  
}
else if(KeyboardEvent.keyCode === 38){
  Y=0;
}
  else if (KeyboardEvent.keyCode === 39) { 
  X=0;
  
} 
else if(KeyboardEvent.keyCode === 40){
  Y=0;
}

});

//