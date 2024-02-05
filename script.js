function getComputerChoice() {
    var options = ["rock", "paper", "scisors"];

    // random gets a random number number from 0 to 1 exclusive, that gets multiplied by length of options and rounded down by floor function 
    var choice = Math.floor(Math.random() * options.length)
    // indexing into options array
    return options[choice];
}

function getPlayerChoice() {
    return prompt("Select one of 'rock / paper / scisors'").toLowerCase();
}

function playRound() {
    computer = getComputerChoice();
    player = getPlayerChoice();

}


