function getComputerChoice() {
    var options = ["Rock", "Paper", "Scisors"];

    // random gets a random number number from 0 to 1 exclusive, that gets multiplied by length of options and rounded down by floor function 
    var choice = Math.floor(Math.random() * options.length)
    // indexing into options array
    return options[choice];
}

function evaluateRound(playerChoice, computerChoice) {
    switch(playerChoice) {
        case 'Rock':
            switch(computerChoice) {
                case 'Rock':
                    document.querySelector('#singleresult').textContent = 'Tie!';
                    break;
                
                case 'Paper':
                    document.querySelector('#singleresult').textContent = 'You lose!';
                    computerScore += 1;
                    break;
                
                case 'Scisors':
                    document.querySelector('#singleresult').textContent = 'You win!';
                    playerScore += 1;
                    break;
            }
            break;

        case 'Paper':
            switch(computerChoice) {
                case 'Rock':
                    document.querySelector('#singleresult').textContent = 'You win!';
                    playerScore += 1;
                    break;
                
                case 'Paper':
                    document.querySelector('#singleresult').textContent = 'Tie!';
                    break;
                
                case 'Scisors':
                    document.querySelector('#singleresult').textContent = 'You lose!';
                    computerScore += 1;
                    break;
            }
            break;

        case 'Scisors':
            switch(computerChoice) {
                case 'Rock':
                    document.querySelector('#singleresult').textContent = 'You lose!';
                    computerScore += 1;
                    break;
                    
                case 'Paper':
                    document.querySelector('#singleresult').textContent = 'You win!';
                    playerScore += 1;
                    break;
                    
                case 'Scisors':
                    document.querySelector('#singleresult').textContent = 'Tie!';
                    break;
            }
            break;
    };
};



let playerScore = 0;
let computerScore = 0;
const play = document.querySelectorAll('button');
play.forEach((button) => {
    button.addEventListener('click', () => {
            
        document.querySelector('#finalresult').textContent = '';
        let computerChoice = getComputerChoice();
        let playerChoice = button.value
        evaluateRound(playerChoice, computerChoice);

        document.querySelector('#playerscore').textContent = `Player score is ${playerScore}`;
        document.querySelector('#computerscore').textContent = `Computer score is ${computerScore}`;
        document.querySelector('#choices').textContent = `You picked ${playerChoice} and computer picked ${computerChoice}`;
        
        if(playerScore == 5) {
            document.querySelector('#finalresult').textContent = 'You smashed computer to pieces!';
            playerScore = 0;
            computerScore = 0;
        }
        
        else if(computerScore == 5) {
            document.querySelector('#finalresult').textContent ='You are so bad, try harder next time.';
            playerScore = 0;
            computerScore = 0;
        
        };
        
        });
});



