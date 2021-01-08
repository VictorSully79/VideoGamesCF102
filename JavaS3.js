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

function message3() {
    stringVar = prompt('How many stars would you rate this?');
    for (let i = 0; i <stringVar; i++) {
        document.write("<img src=https://www.birmingham-rep.co.uk/cmsUploads/show/images/Search_For_The_Second_Star.jpg>");
    }
}