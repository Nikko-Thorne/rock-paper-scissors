let playerScore;
let computerScore;
let outCome;

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
  playerScore = 0;
  computerScore = 0;
    if(playerChoice === computerChoice) {
      return "Its a draw";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        return ["You win", playerScore];
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore++;
      return ["You win", playerScore];
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
      return ["You win", playerScore];
    }
     else if( playerChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return ["You lose", computerScore];
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return ["You lose", computerScore];
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
      computerScore++;
      return ["You lose", computerScore];
    }
};

console.log(playerScore);
console.log(computerScore);

/* log function to play a round and compare the choices */
console.log(playRound(playerChoice, computerChoice));

/* function to play multiple rounds of the game */
function game() {
  playRound();
  playerScore;
  computerScore;
  for (let i = 0; i < 5; i++) {
    if(playerScore == 5){
      alert("You've won the game!");
      playerScore = 0;
      computerScore = 0;
    } else if(computerScore == 5){
      alert("You've lost the game");

    }
}
}

console.log(game(playRound));