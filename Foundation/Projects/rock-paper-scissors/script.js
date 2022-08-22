let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const game_array = ["rock", "paper", "scissors"];

    random_item = Math.floor(Math.random() * game_array.length)
    return game_array[random_item]
}

function playRound(playerSelection, computerSelection){
    const player_selection = playerSelection.toLowerCase();

    if (player_selection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You Lose! paper beats rock";
    } else if (player_selection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! rock beats scissors";
    } else if (player_selection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! scissors beats paper";
    } else if (player_selection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! paper beats rock";
    } else if (player_selection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You Lose! rock beats scissors";
    } else if (player_selection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You Lose! scissors beats paper";
    } else {
        return "It's a draw."
    }
}


function game() {
    for (let rounds = 0; rounds < 5; rounds++) {
        const playerSelection = prompt("Choose your weapon.");
        console.log(`Player: ${playerSelection}`);
        const computerSelection = getComputerChoice();
        console.log(`Computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
}

game();