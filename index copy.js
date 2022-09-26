let playerScore = 0;
let computerScore = 0;


/* function to get player input */
let player = function() {
  let humanChoice = prompt("please pick 'rock, paper, or scissors'");
  let result = humanChoice.toLowerCase();
  console.log(result);
   return result;
}
/* variable to store player choice outside of function */
let playerChoice = player();

/* function to generate random computer choice */
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

/* variable to store computer choice */
const computerChoice = getComputerChoice();
console.log(computerChoice);

/* function to play a round of the game 
let winner =*/
function playRound(playerChoice, computerChoice){
    let outcome = ""
    if(playerChoice === computerChoice) {
      console.log("Its a draw");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      console.log("You win");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      console.log("You win");
    }
     else if( playerChoice === "rock" && computerChoice === "paper") {
      console.log("You lose");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose");
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
      console.log("You lose");
    }
};

/* log function to play a round and compare the choices 
winner(playerChoice, computerChoice);*/
console.log(playRound(playerChoice, computerChoice));

/* function to play multiple rounds of the game */
function (winner) {
  for (let i = 0; i < 5; i++) {

    
    if(winner === "You win") {
      playerScore = i++;
   
    } else {
      if(winner === "You lose") {
        computerScore = i++;
       
      }
    }
    if(playerScore === 5){
      alert("Your the winner!");
    }
    if(computerScore === 5) {
      alert("You lose =[");
    }
  }
}

game();