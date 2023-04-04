// Computer choices
let choices = ["rock", "paper", "scissors"];

// Element id
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");

// Score
let playerScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
  let choice = choices[Math.floor(Math.random()*choices.length)];
  return choice;
};

// Player choice
rock.addEventListener('click', () => {
  const resultsBox = document.querySelector('#results');
  const rockGame = document.createElement('p');
  rockGame.textContent = playRound("rock", getComputerChoice());
  resultsBox.appendChild(rockGame);
});
paper.addEventListener('click', () => {
  const resultsBox = document.querySelector('#results');
  const paperGame = document.createElement('p');
  paperGame.textContent = playRound("paper", getComputerChoice());
  resultsBox.appendChild(paperGame);
});
scissors.addEventListener('click', () => {
  const resultsBox = document.querySelector('#results');
  const scissorsGame = document.createElement('p');
  scissorsGame.textContent = playRound("scissors", getComputerChoice());
  resultsBox.appendChild(scissorsGame);
});

// Logic
function newGame() {
  const resultsBox = document.querySelector('#results');
  const newGameButton = document.createElement('button');
  newGameButton.textContent = "New Game";
  newGameButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
    resultsBox.innerText = "";
  })
  resultsBox.appendChild(newGameButton);
}

function theWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    newGame();
    return "You Win!"
  } else if (computerScore === 5) {
    newGame();
    return "You Lose!"
  } else {
    return
  }
}


// Play Game
function playRound(playerChoice, computerChoice) {
  let result = "";

  if (playerChoice === "rock") {
    switch(computerChoice) {
      case "rock":
        result = "Draw!";
        break;
      case "paper":
        result = "You Lose!";
        computerScore++;
        break;
      case "scissors":
        result = "You Win!";
        playerScore++
        break;
    }
  } else if (playerChoice === "paper") {
    switch(computerChoice) {
      case "rock":
        result = "You Win!";
        playerScore++
        break;
      case "paper":
        result = "Draw!";
        break;
      case "scissors":
        result = "You Lose!";
        computerScore++;
        break;
    }
  } else if (playerChoice === "scissors") {
    switch(computerChoice) {
      case "rock":
        result = "You Lose!";
        computerScore++;
        break;
      case "paper":
        result = "You Win!";
        playerScore++;
        break;
      case "scissors":
        result = "Draw!";
        break;
    }
  }
  document.getElementById("player-score").innerText = playerScore
  document.getElementById("computer-score").innerText = computerScore

  const resultText = document.createElement('p');
  resultText.textContent = result;
  results.appendChild(resultText);

  const gameResult = theWinner(playerScore, computerScore);
  if (gameResult) {
    const gameEnd = document.createElement('p');
    gameEnd.textContent = gameResult;
    results.appendChild(gameEnd);
  }
}