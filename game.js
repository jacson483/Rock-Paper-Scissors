const buttons = document.querySelectorAll("button");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "Player" : "Computer";
    resultsDiv.textContent = `Game Over! ${winner} wins!`;
    buttons.forEach((button) => (button.disabled = true));
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    resultsDiv.textContent = result;
    updateScore();
  });
});
