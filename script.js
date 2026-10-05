"use strict";

let humanScore = 0;
let computerScore = 0;
let playing = true;

const playerScore = document.querySelector(".human-score");
const machineScore = document.querySelector(".computer-score");
const askMsg = document.querySelector(".ask-msg");

// creating button elements for rock, paper, scissors.

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const reset = document.createElement("button");

// create div element for displaying the message.
const message = document.createElement("div");
const showHumanScore = document.createElement("div");
const showComputerScore = document.createElement("div");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
reset.textContent = "Play Again";

// Adding class names to the buttons & div.

rock.classList.add("btn", "rock", "btn-choice");
paper.classList.add("btn", "paper", "btn-choice");
scissors.classList.add("btn", "scissors", "btn-choice");
reset.classList.add("btn", "game-reset");
message.classList.add("msg", "msg-div");
showHumanScore.classList.add("show-human-score", "msg-div");
showComputerScore.classList.add("show-computer-score", "msg-div");

// Appending buttons elements & div to the document.

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(message);
document.body.appendChild(showHumanScore);
document.body.appendChild(showComputerScore);
document.body.appendChild(reset);

// Showing initial scores
showHumanScore.textContent = `Player Score: ${humanScore}`;
showComputerScore.textContent = `Computer Score: ${computerScore}`;

// Selecting and adding event listeners to the buttons.
const btnSelector = document.querySelectorAll(".btn-choice");

let GetComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    message.textContent = "It's tie";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    message.textContent = "you lose! Paper beats Rock.";

    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    message.textContent = "you won! Paper beats Rock.";

    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    message.textContent = "you won! Scissors beats Paper.";

    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    message.textContent = "you lose! Scissors beat Paper.";

    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    message.textContent = "you lose! Rock beats Scissors";

    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    message.textContent = "you won! Rock beats Scissors.";

    humanScore++;
  }
}

function playingTheGame(btn) {
  if (playing) {
    let humanChoice = btn.textContent.toLocaleLowerCase();
    let computerChoice = GetComputerChoice();
    playRound(humanChoice, computerChoice);

    // Showing updated score
    showHumanScore.textContent = `Player Score: ${humanScore}`;
    showComputerScore.textContent = `Computer Score: ${computerScore}`;

    // checking winner
    if (humanScore === 5) {
      message.textContent = "";
      askMsg.textContent = "You Won The Game";
      playing = false;
    } else if (computerScore === 5) {
      message.textContent = "";
      askMsg.textContent = "Computer Won The Game";
      playing = false;
    }
  }
}

btnSelector.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playingTheGame(btn);
  });
});

// Play Again

reset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  askMsg.textContent = "Choose What You want!";
  showHumanScore.textContent = `Player Score: ${humanScore}`;
  showComputerScore.textContent = `Computer Score: ${computerScore}`;
  playing = true;
});
