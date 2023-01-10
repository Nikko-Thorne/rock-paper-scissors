const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;

  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option => {
      option.addEventListener('click',function(){

        const roundsLeft = document.querySelector('.roundsLeft');
        rounds++;
        roundsLeft.innerText = `Moves left: ${10-rounds}`;

        const choiceNumber = Math.floor(Math.random()*3);
        const computerScore = computerOptions[choiceNumber];

        winner(this.innerText, computerScore)

        if(rounds == 10) {
          gameOver(playerOptions, roundsLeft);
        }
      })
    })
  }

  const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.pScore');
    const computerScoreBoard = document.querySelector('.cScore');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer) {
      result.textContent = 'Tie';
    }
    else if(player == 'rock') {
      if(computer == 'paper') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
    else if(player == 'scissors') {
      if(computer == 'rock') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
    else if(player == 'paper') {
      if(computer == 'scissors') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  }
  const gameOver = (playerOptions, roundsLeft) => {
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
      option.style.display = 'none';
    })

    chooseMove.innerText = 'Game Over!!'
    roundsLeft.style.display = 'none';

    if(playerScore > computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Won The Game'
      result.style.color = 'yellow';
    } else if(playerScore < computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Lost The Game'
      result.style.color = 'red';
  } else {
      result.style.fontSize = '2rem';
      result.innerText = 'Tie'
      result.style.color = 'grey';
  }
  
  reloadBtn.addEventListener('click', function() {
    window.location.reload();
  })
  }
  playGame();
}

game();