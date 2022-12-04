var canvs=document.getElementById("game_convase");
var ctx=canvs.getContext("2d");


var ballradious=3, x=canvs.width/2 , y=canvs.height-30 ,
    pong_Width=35,pong_height=5,pong_x=(canvs.width-pong_Width)/2,
    dy=-1  ,dx=-1; 



var brickes=[];
var bricksW=23 , bricksH=10 , brickspadding = 1 ,bricks_Left__offset=5 ,bricks_top__offset = 5,bricks_row=4 , bricks_col=12 ;

brickets_color=['rgb(253, 0, 105)','rgb(253, 0, 105)','yellow','rgb(0, 38, 253)','orange','rgb(8, 247, 8)','rgb(8, 231, 247)'];
for(var i=0;i<bricks_row;i++)
{  for(var j=0;j<bricks_col;j++)
  { 
      var random_color_state=Math.floor(Math.random()*(brickets_color.length-0)+0);
      brickes.push({

      x: (j* (bricksW+brickspadding))+bricks_Left__offset,
      y: (i* (bricksH+brickspadding))+bricks_top__offset,
      status:random_color_state,
      color: brickets_color[random_color_state]

      
    });
    
  }
}

function drow_brakes(){
    brickes.forEach(function (brick) {
        if (brick.status<1)
         {return;}
         ctx.beginPath();
         ctx.rect(brick.x,brick.y,bricksW,bricksH);
         ctx.fillStyle=brick.color;
         ctx.fill();
         ctx.closePath();        
    });
}
function drow_ball(){
    ctx.beginPath();
    ctx.arc(x,y,ballradious,0,Math.PI*2);
    ctx.fillStyle="#f00";
    ctx.stroke();

    ctx.fill();
    ctx.closePath();
    
}
function drow_pong(){
    ctx.beginPath();
    ctx.rect( pong_x, canvs.height-pong_height ,pong_Width,pong_height); 
    ctx.fillStyle="#fff";

    ctx.fill();


    ctx.font="bold " + 10 +"px serif";
    ctx.textBaseline 
    ctx.closePath();
}

function collision_detect()
{
    brickes.forEach(function(b){
       if (b.status<1)return;
        if (x-ballradious> b.x && x-ballradious<b.x+bricksW && y-ballradious> b.y && y-ballradious < b.y+bricksH)
           {
                document.getElementById("breaks_sound").currentTime = 0.09;
                document.getElementById("breaks_sound").play();
                dy=-dy;
                b.status-=1;
                // document.getElementById("breaks_sound").pause();
                // document.getElementById("breaks_sound").currentTime = 0;
               // setTimeout(document.getElementById("breaks_sound").pause(),1000);

           }
         else if (x-ballradious> b.x && x-ballradious<b.x+bricksW && y+ballradious> b.y && y+ballradious < b.y+bricksH)  
          {       
                 document.getElementById("breaks_sound").currentTime = 0.09;
                 document.getElementById("breaks_sound").play();
                 dy=-dy;
                 b.status-=1;
           //  setTimeout(document.getElementById("breaks_sound").pause(),1000);                 
          }    
    });
}

var right_key=false , left_key = false;

// var sound=['sound/gameover1.wav','sound/gameover3.wav','sound/gameover3.wav'];
function draw(){
ctx.clearRect(0,0,canvs.width,canvs.height);
drow_brakes();
drow_ball();
drow_pong();
collision_detect();
if (hitwallsid())
{
    document.getElementById("breaks_sound").currentTime = 0.09;
    document.getElementById("breaks_sound").play();
    dx=-dx;
}
if (hit_top_wall() )
{ 

  document.getElementById("breaks_sound").currentTime = 0.09;
  document.getElementById("breaks_sound").play();
  dy=-dy;
}
if (hit_Pang())
{
  document.getElementById("pange_sound").currentTime = 0.09;
  document.getElementById("pange_sound").play();
  dy=-dy;
}
if (gameover())
{
  document.getElementById("gameover_sound").src='sound/gameover'+Math.floor(Math.random()*(3 - 1 + 1) + 1)+'.wav';
  document.getElementById("gameover_sound").currentTime = 0.05;
  document.getElementById("gameover_sound").play();
  clearInterval(palyinterval);
  document.getElementById("game_overdev").style.display="block";
}

function hitwallsid()  { return x + dx > canvs.width-ballradious || x + dx < ballradious; }
function hit_top_wall(){ return y+dy < ballradious;}

function hit_Pang()    { return hitbotton() && ballovrtpang() ;}
function hitbotton()   { return y+ballradious+dy >canvs.height-ballradious ;}
function ballovrtpang(){ return x+ballradious > pong_x && x+ballradious < pong_x+pong_Width; }

function gameover()    { return hitbotton() && !ballovrtpang();}


function keydowen(e){
  right_key = (e.keyCode==39);
  left_key  = (e.keyCode==37);
}
function keyupp(e){
    right_key = (e.keyCode==39) ? false : right_key;
    left_key  = (e.keyCode==37) ? false : left_key;
  }

document.addEventListener("keydown",keydowen,false);
document.addEventListener("keyup",keyupp,false);

var maxx=canvs.width-pong_Width;
var minx=0;

var pong_delta = right_key ? 2: left_key ? -2 : 0;
pong_x=pong_x+pong_delta;
pong_x=Math.max(minx, Math.min(pong_x,maxx));

x+=dx;
y+=dy;

}

var palyinterval;
function startgame(){
  document.getElementById("game_start").style.display="none";
  palyinterval=setInterval(draw,10);
}