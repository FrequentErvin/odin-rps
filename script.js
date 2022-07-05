playerScore = 0;
computerScore = 0;
over = false;

function computerPlay(){
    randint = Math.floor(Math.random()*3);
    switch(randint){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}
function updateScore(outcome){
    document.getElementById("main").innerHTML = outcome;
    document.getElementById("playerscore").innerHTML = "Player score: " + playerScore;
    document.getElementById("computerscore").innerHTML = "Computer score: " + computerScore;
    checkWin();
}
function playRound(playerSelection, computerSelection){
    document.getElementById("computer").innerHTML = "Computer played: " + computerSelection;
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                computerScore++;
                updateScore("You lost the round! Paper beats rock!");
            }else if(computerSelection == "scissors"){
                playerScore++;
                updateScore("You won the round! Rock beats scissors!");
            }else{
                document.getElementById("main").innerHTML = "Tie!";
            } 
        }else if(playerSelection == "paper"){
            if(computerSelection == "scissors"){
                computerScore++;
                updateScore("You lost the round! Scissors beat paper!");
            }else if(computerSelection == "rock"){
                playerScore++;
                updateScore("You won the round! Paper beats rock!");
            }else{
                document.getElementById("main").innerHTML = "Tie!";
            }
        }else{
            if(computerSelection == "rock"){
                computerScore++;
                updateScore("You lost the round! Rock beats scissors!");
            }else if(computerSelection == "paper"){
                playerScore++;
                updateScore("You won the round! Scissors beat paper!");
            }else{
                document.getElementById("main").innerHTML = "Tie!";
            }
        }
}
function reset(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("main").innerHTML = "Start game!";
    document.getElementById("playerscore").innerHTML = "Player score: 0";
    document.getElementById("computerscore").innerHTML = "Computer score: 0";
    document.getElementById("computer").innerHTML = "Computer move displayed here.";
    over = false;
}
document.getElementById("reset").addEventListener("click",reset);

function checkWin(){
    if(playerScore >= 5){
        over = true;
        document.getElementById("main").innerHTML = "You won the game!";
        setTimeout(reset , 5000);
    }else if(computerScore >= 5){
        over = true;
        document.getElementById("main").innerHTML = "You lost :(";
        setTimeout(reset, 5000);
    }
}
    document.getElementById("rock").addEventListener("click", function(){
        computerSelection = computerPlay();
        if(over === false) playRound("rock", computerSelection);
    });
    document.getElementById("paper").addEventListener("click", function(){
        computerSelection = computerPlay();
        if(over === false) playRound("paper", computerSelection);
    });
    document.getElementById("scissors").addEventListener("click",function(){
        computerSelection = computerPlay();
        if(over === false) playRound("scissors", computerSelection);
    });