let correctAnswer = 11;

function guessingGame() {
    let userAnswer = prompt('Please select a number 1 - 100');
    while (userAnswer < 1 || userAnswer > 100) {
        userAnswer = prompt('Incorrect.  Please select a number 1 - 100');
    }
    let numberOfGuesses = 7
    for (let i = 0; i < numberOfGuesses; i++) {
        if (userAnswer == correctAnswer) {
            alert('Great Job!');
            break;
        } else if (userAnswer < correctAnswer) {
            alert('Too low');
            userAnswer = prompt('Please select a number 1 - 100');
        } else if (userAnswer > correctAnswer) {
            alert('Too high');
            userAnswer = prompt('Please select a number 1 - 100');
        }
    }
}