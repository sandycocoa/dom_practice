let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random()*choices.length)];
  return choice;
}

function getPlayerChoice() {
  // return the player's choice here
  return window.prompt("Rock, Paper, Scissors!", "Play!").toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  let result = "";
  if (playerChoice === "rock") {
    switch(computerChoice) {
      case "rock":
        result = "Draw!";
        break;
      case "paper":
        result = "You Lose!";
        break;
      case "scissors":
        result = "You Win!";
        break;
    }
  } else if (playerChoice === "paper") {
    switch(computerChoice) {
      case "rock":
        result = "You Win!";
        break;
      case "paper":
        result = "Draw!";
        break;
      case "scissors":
        result = "You Lose!";
        break;
    }
  } else if (playerChoice === "scissors") {
    switch(computerChoice) {
      case "rock":
        result = "You Lose!";
        break;
      case "paper":
        result = "You Win!";
        break;
      case "scissors":
        result = "Draw!";
        break;
    }
  }
  return result;
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));
