// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });
    }
});

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 24) + 1;
    let num2 = Math.floor(Math.random() * 24) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown Game type: ${gameType}`);
        throw `Unknown Game type: ${gameType}. Aborting`;
    }
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function checkAnswer() {
    // Implement checkAnswer logic here
}

function calculateCorrectAnswer() {
    // Implement calculateCorrectAnswer logic here
}

function incrementScore() {
    // Implement incrementScore logic here
}

function incrementWrongAnswer() {
    // Implement incrementWrongAnswer logic here
}

function displaySubtractQuestion() {
    // Implement displaySubtractQuestion logic here
}

function displayMultiplyQuestion() {
    // Implement displayMultiplyQuestion logic here
}