$(document).ready(function(){

//target value and starting crystal values
var targetValue = Math.floor(Math.random()*101 + 19);
var crystal1 = Math.floor(Math.random()*11 + 1);
var crystal2 = Math.floor(Math.random()*11 + 1);
var crystal3 = Math.floor(Math.random()*11 + 1);
var crystal4 = Math.floor(Math.random()*11 + 1);

var playerScore = 0;
var totalWins = 0;
var totalLosses = 0;

//set the target value and the random values for each of the crystals
function resetValues(){
    targetValue = Math.floor(Math.random()*101 + 19);
    crystal1 = Math.floor(Math.random()*11 + 1);
    crystal2 = Math.floor(Math.random()*11 + 1);
    crystal3 = Math.floor(Math.random()*11 + 1);
    crystal4 = Math.floor(Math.random()*11 + 1);
    playerScore = 0;
    updateValue();
};

function checkWin(){
    if (playerScore === targetValue){
        userWins();
    }
    else if (playerScore > targetValue){
        userLoses();
    }
};

function updateValue(){
    document.getElementById("value").innerHTML = targetValue;
};
function updateScore(){
    document.getElementById("score").innerHTML = playerScore;
};

function userWins(){
    totalWins++;
    document.getElementById("wins").innerHTML = totalWins;
    alert("You Win!");
    resetValues();
};

function userLoses(){
    totalLosses++;
    document.getElementById("losses").innerHTML = totalLosses;
    alert("You Lose!");
    resetValues();
};

$("#crystal1").on("click", function(){
    playerScore = playerScore + crystal1;
    updateScore();
    console.log(playerScore);
    checkWin();
});

$("#crystal2").on("click", function(){
    playerScore = playerScore + crystal2;
    updateScore();
    console.log(playerScore);
    checkWin();
});

$("#crystal3").on("click", function(){
    playerScore = playerScore + crystal3;
    updateScore();
    console.log(playerScore);
    checkWin();
});

$("#crystal4").on("click", function(){
    playerScore = playerScore + crystal4;
    updateScore();
    console.log(playerScore);
    checkWin();
});

});
