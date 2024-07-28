'use strict';
// Define variables for player and computer scores.

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
// Defining the game logic.

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = 'Tie!';
    }
    
    if ((playerChoice === 'ROCK' && computerChoice === 'Scissors') ||
    (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
    (playerChoice === 'PAPER' && computerChoice === 'ROCK')) {
        playerScore++;
        roundWinner = 'You Win!';
    }

    if ((computerChoice === 'ROCK' && playerChoice === 'Scissors') ||
    (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
    (computerChoice === 'PAPER' && playerChoice === 'ROCK')) {
        computerScore++;
        roundWinner = 'You Lost!';
    }
}

// Randomizing the result of the computer.

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'ROCK'
            case 1:
                return 'PAPER'
                case 2:
                    return 'SCISSORS'
    }

}

// Defining the finishing score.

function isGameOver () {
    return playerScore === 5 || comnputerScore === 5;
}





