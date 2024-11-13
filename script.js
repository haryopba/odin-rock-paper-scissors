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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice;
  let computerChoice;

  function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase();
    if(!(choice === "rock" || choice === "paper" || choice === "scissors")){
      console.log("Please choose rock, paper, or scissors");
      return;
    }

    if(choice === computerChoice) {
      console.log(`Draw, both choose ${choice}`);
      return;
    }
  
    if(choice === "rock") {
      if(computerChoice === "paper"){
        console.log("Lose, Paper beat Rock");
        computerScore = computerScore + 1;
      } else {
        console.log("Win, Rock beat Scissors")
        humanScore = humanScore + 1;
      }
    } else if(choice === "paper") {
      if(computerChoice === "scissors"){
        console.log("Lose, Scissors beat Paper");
        computerScore = computerScore + 1;
      } else {
        console.log("Win, Paper beat Rock")
        humanScore = humanScore + 1;
      }
    } else if(choice === "scissors"){
      if(computerChoice === "Rock"){
        console.log("Lose, Rock beat Scissors");
        computerScore = computerScore + 1;
      } else {
        console.log("Win, Scissors beat Paper");
        humanScore = humanScore + 1;
      }
    }
    return;
  }

  for(let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: ${humanScore} - ${computerScore}`)
  }

  if(humanScore > computerScore) {
    console.log("You win the game");
  } else if(humanScore < computerScore) {
    console.log("You lose the game")
  } else {
    console.log("Draw")
  }
}

playGame();