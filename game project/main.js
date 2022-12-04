var curntplayer="O";
var countTime=0;
var numberOfBoxchnageed=0;
var winner_indecator=false;
var intervalIndecator;
var header=document.getElementById("header");
var bored= document.getElementById("bord");
var boxex=document.getElementsByClassName("box");


function setgame()
{
    for(var i=0;i<9;i++)
    {
       var box=document.createElement("div");
       box.id="item"+i;
       box.classList.add("box");
       bored.append(box); 
    }
    
    for(var i=0;i<9;i++)
    {
        boxex[i].addEventListener("click",check);
    }
}


function check()
{
    if (curntplayer=="O" && event.target.innerHTML=="" && numberOfBoxchnageed<=9)
    {    numberOfBoxchnageed++;
        event.target.innerHTML="O";
        curntplayer="X";
        header.innerHTML="ready : "+curntplayer;
        winner(event.target.innerHTML);
    }
    else if (curntplayer=="X" &&  event.target.innerHTML=="" && numberOfBoxchnageed<=9)
    {   numberOfBoxchnageed++;
        event.target.innerHTML="X";
        curntplayer="O";
        header.innerHTML="ready : "+curntplayer;
        winner(event.target.innerHTML);
    }
   if(numberOfBoxchnageed==9 && !winner_indecator)
    {    header.innerHTML="";
         var No_winner_span=document.createElement("span");
         No_winner_span.classList.add("No_winner_span");
         No_winner_span.innerText="No Winner ,";
         header.append(No_winner_span);
         header.innerHTML+="We Will Reload ";
         intervalIndecator=  setInterval(refrshgame ,1000);
    }
    console.log(numberOfBoxchnageed);
}


function winner(obj)
{
   for(var i=0;i<=6;i+=3)
    {
      if (boxex[i].innerHTML==boxex[i+1].innerHTML && boxex[i].innerHTML==boxex[i+2].innerHTML && boxex[i].innerHTML!="" )
      {
        winnigAction(obj,i,i+1,i+2);
      }
    }
    for(var i=0;i<3;i++)
    {
      if (boxex[i].innerHTML==boxex[i+3].innerHTML && boxex[i].innerHTML==boxex[i+6].innerHTML && boxex[i].innerHTML!="" )
      {
        winnigAction(obj,i,i+3,i+6);
      }
    }

    if (boxex[0].innerHTML==boxex[4].innerHTML && boxex[0].innerHTML==boxex[8].innerHTML && boxex[0].innerHTML!="" )
    {
        winnigAction(obj,0,4,8);
    }
    if (boxex[2].innerHTML==boxex[4].innerHTML && boxex[2].innerHTML==boxex[6].innerHTML && boxex[2].innerHTML!="" )
    {
        winnigAction(obj,2,4,6);
    }
}
function refrshgame()
{
    header.innerHTML+=".";
    countTime++;
    if(countTime==4)
    {
        clearInterval(intervalIndecator);
        location.reload();
    }
}
function winnigAction(obj,a,b,c)
{   
    winner_indecator=true;
    header.innerHTML="Winner : ";
    intervalIndecator=  setInterval(refrshgame ,1000);
    for(var i=0;i<9;i++)
    {
        boxex[i].removeEventListener("click",check);
    }
    boxex[a].classList.add("win");
    boxex[b].classList.add("win");
    boxex[c].classList.add("win");
    var winner_span=document.createElement("span");
    winner_span.classList.add("winner_span");
    winner_span.innerText=obj;
    header.append(winner_span);
}
