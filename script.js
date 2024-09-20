const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = '0';

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'backspace') {
            backspace();
        } else if (button.id === 'equal') {
            calculate();
        } else {
            appendToDisplay(button.value);
        }
    });
});

function clearDisplay() {
    currentInput = '0';
    display.value = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1) || '0';
    display.value = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '0';
    }
}
