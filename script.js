'use strict';
// Define variables for player and computer scores. Assigning components to the ui.

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const playerSelection = document.querySelector('.player-selection');
const computerSelection = document.querySelector('.computer-selection');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playAgainBtn = document.querySelector('.play-again');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const announcer = document.querySelector('.announcer');

// Defining the game logic.

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = 'Tie!';
    } else if ((playerChoice === '✊' && computerChoice === '✌') ||
               (playerChoice === '✌' && computerChoice === '🖐') ||
               (playerChoice === '🖐' && computerChoice === '✊')) {
        playerScore++;
        roundWinner = 'You Win!';
    } else {
        computerScore++;
        roundWinner = 'You Lost!';
    }
}

// Randomizing the result of the computer.

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return '✊';
        case 1:
            return '🖐';
        case 2:
            return '✌';
    }
}

// Defining the finishing score.

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

// Update UI with the current game state
function updateUI(playerChoice, computerChoice) {
    playerSelection.textContent = playerChoice === '' ? '' : `Player: ${playerChoice}`;
    computerSelection.textContent = computerChoice === '' ? '' : `Computer: ${computerChoice}`;
    playerSelection.style = 'font-size: 1.2rem';
    computerSelection.style = 'font-size: 1.2rem';
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    announcer.textContent = roundWinner;
}

// Handle button clicks for player's choice
function handlePlayerChoice(playerChoice) {
    if (isGameOver()) {
        return;
    }

    const computerChoice = getRandomChoice();
    playRound(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice);

    if (isGameOver()) {
        announcer.textContent += playerScore === 5 ? ' Game Over! You won the game!' : ' Game Over! You lost the game!';
}
}

// Event listeners for the buttons
rockBtn.addEventListener('click', () => handlePlayerChoice('✊'));
paperBtn.addEventListener('click', () => handlePlayerChoice('🖐'));
scissorsBtn.addEventListener('click', () => handlePlayerChoice('✌'));

// Reset the game
playAgainBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    updateUI('', '');
    announcer.textContent = 'Game Reset! Make your choice.';
    announcer.style = 'font-size: 2rem';
    announcer.style = 'text-align: center';

});

