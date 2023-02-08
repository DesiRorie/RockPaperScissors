const buttons = document.querySelectorAll("#button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.textContent;

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (playerChoice === "PAPER" && computerChoice === "ROCK") ||
      (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      result = "You win!";
    } else {
      result = "The computer wins!";
    }

    document.querySelector("#result").textContent = result;
  });
});
