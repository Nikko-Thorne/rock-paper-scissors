
var buttons = document.getElementsByClassName('gameButton');

for(var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() { playerChoice() }; 
}

function playerChoice () {
    let playerSelection = document.getElementsByClassName("gameButton").value;
    alert(playerSelection);
}
/*
document.getElementsByClass("b1").addEventListener("click", playerSelection);

}
*/

let computerSelection = function computerPlay() {
  let random = Math.random();
  if (random <= 0.3333) {
      return "paper";
  } else if (random >= 0.6666) {
      return "rock";
  } else {
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
          computerScore++;
          return lose;
      } else if (computerSelection === "rock") {
          return tie;
      } else {
          userScore++;
          return win;
      }
  }

  if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "paper") {
          userScore++;
          return win;
      } else if (computerSelection === "rock") {
          computerScore++;
          return lose;
      } else {
          return tie;
      }
  }

  if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "paper") {
          return tie;
      } else if (computerSelection === "rock") {
          userScore++;
          return win;
      } else {
          computerScore++;
          return lose;
            }
        }
    };