function getComputerChoice(){
    const game_array = ["rock", "paper", "scissors"];

    random_item = Math.floor(Math.random() * game_array.length)
    return game_array[random_item]
}

function playRound(playerSelection, computerSelection){
    const player_selection = playerSelection.toLowerCase();

    if (player_selection === "rock" && computerSelection === "paper") {
        return "You Lose! paper beats rock";
    } else if (player_selection === "rock" && computerSelection === "scissors") {
        return "You Win! rock beats scissors";
    } else if (player_selection === "scissors" && computerSelection === "paper") {
        return "You Win! scissors beats paper";
    } else if (player_selection === "paper" && computerSelection === "rock") {
        return "You Win! paper beats rock";
    } else if (player_selection === "scissors" && computerSelection === "rock") {
        return "You Lose! rock beats scissors";
    } else if (player_selection === "paper" && computerSelection === "scissors") {
        return "You Lose! scissors beats paper";
    } else {
        return "It's a draw."
    }
}

const playerSelection = "rock";
console.log(`Player: ${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));