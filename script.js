function getComputerChoice() {
  let randomValue = Math.random();
  if(randomValue < 0.3){
    return "rock";
  } else if(randomValue >= 0.3 && randomValue < 0.6){
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Please input rock, paper, or scissors");
  return userInput;
}

let timePlayed = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let choice = humanChoice.toLowerCase();
  if(!(choice === "rock" || choice === "paper" || choice === "scissors")){
    console.log("Please choose rock, paper, or scissors");
    return;
  }

  if(choice === computerChoice) {
    roundDisplay.innerText = `Draw, both choose ${choice}`;
    timePlayed += 1;
    return;
  }

  if(choice === "rock") {
    if(computerChoice === "paper"){
      roundDisplay.innerText = "Lose, Paper beat Rock";
      computerScore = computerScore + 1;
    } else {
      roundDisplay.innerText = "Win, Rock beat Scissors";
      humanScore = humanScore + 1;
    }
  } else if(choice === "paper") {
    if(computerChoice === "scissors"){
      roundDisplay.innerText ="Lose, Scissors beat Paper";
      computerScore = computerScore + 1;
    } else {
      roundDisplay.innerText ="Win, Paper beat Rock";
      humanScore = humanScore + 1;
    }
  } else if(choice === "scissors"){
    if(computerChoice === "Rock"){
      roundDisplay.innerText ="Lose, Rock beat Scissors";
      computerScore = computerScore + 1;
    } else {
      roundDisplay.innerText ="Win, Scissors beat Paper";
      humanScore = humanScore + 1;
    }
  }
  timePlayed += 1;
  humanScoreDisplay.innerText = `Human Score: ${humanScore}`;
  computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;

  if(timePlayed >= 5){
    if(humanScore > computerScore) {
      gameDisplay.innerText = "You win the game";
    } else if(humanScore < computerScore) {
      gameDisplay.innerText = "You lose the game";
    } else {
      gameDisplay.innerText = "Draw";
    }
  } 
  return;
}

const body = document.querySelector("body");

const buttonRock = document.createElement("button");
buttonRock.innerText = "Rock";
buttonRock.addEventListener("click", () => playRound("rock", getComputerChoice()));

const buttonPaper = document.createElement("button");
buttonPaper.innerText = "Paper";
buttonPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));

const buttonScissors = document.createElement("button");
buttonScissors.innerText = "Scissors";
buttonScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const humanScoreDisplay = document.createElement("div");
humanScoreDisplay.innerText = `Human Score: ${humanScore}`;

const computerScoreDisplay = document.createElement("div");
computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;

const roundDisplay = document.createElement("div");
roundDisplay.innerText = ""

const gameDisplay = document.createElement("div");
gameDisplay.innerText = ""

body.append(buttonRock, buttonPaper, buttonScissors, humanScoreDisplay, computerScoreDisplay, roundDisplay, gameDisplay);