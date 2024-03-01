function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Create Random posture and label 'Rock', 'Paper', 'Scissors' with 0-2 full integer
function getComputerChoice() {
    return ['Rock', 'Paper', 'Scissors'][getRandomInt(3)];
}