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
      playerScore = i++;  
      console.log("You win");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore = i++;
      console.log("You win");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore = i++;
      console.log("You win");
    }
     else if( playerChoice === "rock" && computerChoice === "paper") {
      computerScore = i++;
      console.log("You lose");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerScore = i++;
      console.log("You lose");
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
      computerScore = i++;
      console.log("You lose");
    }
};

/* log function to play a round and compare the choices 
winner(playerChoice, computerChoice); */
console.log(playRound(playerChoice, computerChoice));

/* function to play multiple rounds of the game */
function winner(playerChoice, computerChoice) {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt()
    playRound(computerChoice, playerChoice)
  } 
  if(winner === "Its a draw") {
    console.log("Its a draw");
  }
    else if(winner === "You win") {
      console.log("You win");
    } else {
      if(winner === "You lose") {
        console.log("You lose");
      }
    }
  }


winner();