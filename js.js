var rockEl = document.getElementById("rock");
var paperEl = document.getElementById("paper");
var scissorsEl = document.getElementById("scissors");
var choiceEls = document.querySelectorAll(".choice");
var pcOptions = document.querySelectorAll(".pcoption");
var resetbtnEl= document.getElementById("resetbtn");
var nameEl = document.getElementById("name");

var userScore = 0;
var pcScore = 0;

var userName = prompt("What's your name?");
if(userName){
alert("Welcome, " + userName + "!"); nameEl.textContent=userName}
else{alert("No name? We'll just call you Player 😄"); nameEl.textContent="player"
}




pcOptions.forEach(option => option.style.opacity = "0");

var nextRound = function(){    pcOptions.forEach(option=>option.style.opacity="0");
    choiceEls.forEach(button=> button.classList.remove("select"));}
;
//scoring
var  compareChoices= function(pcChoice,userChoice){
    if (userChoice===pcChoice){return"it's a tie!"};

    if(userChoice==="rock"&&pcChoice==="scissors"||
        userChoice==="paper"&&pcChoice==="rock"||
        userChoice==="scissors"&&pcChoice==="paper") {
            userScore++;
            return "You win!";
        } else {
            pcScore++;
            return "PC wins!";
        }
    }

var updateScore= function(){
    document.getElementById("pcscore").textContent=pcScore;
    document.getElementById("userscore").textContent=userScore;
};


var userChoose= function(event){
    nextRound();

    var userChoice = event.target.id;
event.target.classList.add("select");



var options = ["rock","paper","scissors"];
const randomIndex= Math.floor(Math.random()* options.length);
var pcChoice = options[randomIndex];

if(options[randomIndex]==="rock"){document.getElementById("pcrock").style.opacity=1; 
    document.getElementById("pcrock").classList.add("scale");}
else if (options[randomIndex]==="paper"){document.getElementById("pcpaper").style.opacity=1; 
    document.getElementById("pcpaper").classList.add("scale");}
else if (options[randomIndex]==="scissors"){document.getElementById("pcscissors").style.opacity=1;
    document.getElementById("pcscissors").classList.add("scale");};


var result=compareChoices(pcChoice,userChoice);
updateScore();
 alert(result);}



choiceEls.forEach(function(button){
    button.addEventListener("click", userChoose);

})

var reset=function(){
    pcScore=0;
    userScore=0;
    updateScore();
    resetbtnEl.style.boxShadow="0"
}

resetbtnEl.addEventListener("click",reset)