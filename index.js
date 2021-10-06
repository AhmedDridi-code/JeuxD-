const rollDiceBtn=document.querySelector(".btn--roll");
var holdBtn= document.querySelector(".btn--hold");
var some=0;
var transmition=false;
//var player1=true;
var player1 = {
    "name":"name--0",
    "player":".player--0",
    "scoreId":"#score--0",
    "currentId":"#current--0",
    "state":true,
    "current":0
}
var player2 = {
    "name":"name--1",
    "player":".player--1",
    "scoreId":"#score--1",
    "currentId":"#current--1",
    "state":false,
    "current":0
}
var diceValues={
    1:"dice-1.png",
    2:"dice-2.png",
    3:"dice-3.png",
    4:"dice-4.png",
    5:"dice-5.png",
    6:"dice-6.png",
}
reset();
rollDiceBtn.addEventListener('click',rollDice);
document.querySelector(".btn--new").addEventListener("click",reset);
holdBtn.addEventListener("click",hold);



function rollDice(){
        let player = player1.state? player1 : player2;   
        dice = Math.floor(Math.random()*6+1);
        console.log(dice);
        if (dice===1){
            console.log("you got a 1");
            document.querySelector("img").src=diceValues[dice];
           some=0; 
           
           Switch();

        }else{
          document.querySelector("img").src=diceValues[dice];
            some+=dice;

            document.querySelector(player.scoreId).textContent=some;  
        }

}
function hold(){
    let player = player1.state? player1 : player2; 
    player.current+=some
    some=0;
    document.querySelector(player.currentId).textContent=player.current;
    
   
      if(player.current>20){
        win(player);
        return 0;
    }
    Switch();
  
}
function reset(){
    document.querySelector(player1.scoreId).textContent=0;
    document.querySelector(player2.scoreId).textContent=0;
    document.querySelector(player1.currentId).textContent=0;
    document.querySelector(player2.currentId).textContent=0;
    var player = player1.state?player1:player2;
    document.querySelector(player.player).classList.remove("player--winner");

    player1.current=0;
    player2.current=0;
    some=0;
    rollDiceBtn.disabled=false;
    holdBtn.disabled=false;
}
function Switch(){
    let playerActive = player1.state? player1 : player2; 
    let  playerSecond= !player1.state?player1:player2;
    document.querySelector(playerActive.scoreId).textContent=0;
     document.querySelector(playerActive.player).classList.remove("player--active");
    document.querySelector(playerSecond.player).classList.add("player--active");
           player1.state=!player1.state;
            player2.state=!player2.state;
}
function win(player){
    rollDiceBtn.disabled=true;
    holdBtn.disabled=true;
    document.querySelector(player.player).classList.add("player--winner");

}
