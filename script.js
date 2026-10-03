"use strict";

let humanScore = 0;
let computerScore = 0;

// creating button elements for rock, paper, scissors.

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

// create div element for displaying the message.
const message = document.createElement("div");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

// Adding class names to the buttons & div.

rock.classList.add("btn", "rock");
paper.classList.add("btn", "paper");
scissors.classList.add("btn", "scissors");
message.classList.add("msg");

// Appending buttons elements & div to the document.

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(message);

// Selecting and adding event listeners to the buttons.
const btnSelector = document.querySelectorAll(".btn");

let GetComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
};

// let getHumanChoice = function () {
//   const humanChoice = prompt(
//     "Choose one between rock, paper or scissors: ",
//   ).toLowerCase();
//   return humanChoice;
// };

let computerChoice;
let humanChoice;
// let humanChoice = getHumanChoice();

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

btnSelector.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    humanChoice = btn.textContent.toLocaleLowerCase();
    computerChoice = GetComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

// function playGame() {
//   playRound(humanChoice, computerChoice);
//   computerChoice = GetComputerChoice();
//   humanChoice = getHumanChoice();
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`----- ROUND ${i} -----`);
//   playGame();
// }

function winnerScore() {
  console.log("---- IT'S RESULT TIME -----");
  if (humanScore === computerScore) {
    console.log(
      `It's Tie: your score is ${humanScore} and computer score is ${computerScore}.`,
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You won!: your score is ${humanScore} and computer score is ${computerScore}.`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `YOU Lose!: your score is ${humanScore} and computer score is ${computerScore}.`,
    );
  }
}

winnerScore();
