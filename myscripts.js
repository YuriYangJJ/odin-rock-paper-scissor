function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Create Random posture and label 'Rock', 'Paper', 'Scissors' with 0-2 full integer
function getComputerChoice() {
    return ['Rock', 'Paper', 'Scissors'][getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return "tie"
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper' ||
            playerSelection == 'paper' && computerSelection == 'scissors' ||
            playerSelection == 'scissors' && computerSelection == 'rock') {
        // player lose
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}