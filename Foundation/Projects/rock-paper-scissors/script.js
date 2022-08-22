function getComputerChoice(){
    game_array = ["Rock", "Paper", "Scissors"];

    random_item = Math.floor(Math.random() * game_array.length)
    return game_array[random_item]
}