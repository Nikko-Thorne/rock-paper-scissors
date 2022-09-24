let playerChoice = prompt("please pick 'rock, paper, or scissors'");
console.log(playerChoice);

function getComputerChoice() {
    let y = "";
    let x = Math.floor((Math.random() * 3) + 1);
  
    if(x == 1) {
    y = "rock";
   }
   else if( x == 2) {
    y = "paper";
   }
   else {
    y = "scissors";
   }
   return y;
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function gameOutcome(playerChoice, computerChoice){
    let outcome = ""
    if( playerChoice == "rock" && computerChoice == "scissors") {
        outcome = ("You win");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
       outcome = ("you win!") 
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
       outcome = ("you win!")
    }
     else if( playerChoice == "rock" && computerChoice == "paper") {
        outcome = ("You lose");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
       outcome = ("you lose!") 
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
       outcome = ("you lose!")
    }
     else {
        outcome = "draw";
     }
    return outcome;
}

const winner = gameOutcome();
console.log(winner); 