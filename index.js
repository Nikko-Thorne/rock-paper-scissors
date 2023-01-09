document.getElementById("button-rock").addEventListener("click", handleClick);
document.getElementById("button-paper").addEventListener("click", handleClick);
document.getElementById("button-scissors").addEventListener("click", handleClick);
let divOutcome = document.getElementById("gameOutcome");

function handleClick(event) {
    let playerSelection = event.target.value;
    playRound(playerSelection, computerSelection);
}

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
if (playerSelection === "rock") {
      if (computerSelection === "paper") {
          divOutcome.textContent = ("you choose rock and your opponent choose paper that means you lose");
      } else if (computerSelection === "rock") {
        divOutcome.textContent = ("you choose rock and your opponent choose rock that means you tied");
      } else {
        divOutcome.textContent = ("you choose rock and your opponent choose scissors that means you win");
      }
  }

  if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        divOutcome.textContent = ("you choose scissors and your opponent choose paper that means you win");
      } else if (computerSelection === "rock") {
        divOutcome.textContent = ("you choose scissors and your opponent choose rock that means you lose");
      } else {
        divOutcome.textContent = ("you choose scissors and your opponent choose scissors that means you tie");
      }
  }

  if (playerSelection === "paper") {
      if (computerSelection === "paper") {
        divOutcome.textContent = ("you choose paper and your opponent choose paper that means you tie");
      } else if (computerSelection === "rock") {
        divOutcome.textContent = ("you choose paper and your opponent choose rock that means you win");
      } else {
        divOutcome.textContent = ("you choose paper and your opponent choose scissors that means you lose");
            }
        }
};

