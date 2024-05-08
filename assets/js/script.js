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
    
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}