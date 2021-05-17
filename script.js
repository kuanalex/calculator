const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const pointButton = document.querySelector("[data-point]");
const screen = document.querySelector("[data-screen]");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

equalsButton.addEventListener("click", () => console.log("equals button pressed"));
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", () => console.log("delete button pressed"));
pointButton.addEventListener("click", () => console.log("decimal button pressed"));


numberButtons.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
    if (screen.textContent === "0" || shouldResetScreen) resetScreen();
    screen.textContent += number;
}

function resetScreen() {
    screen.textContent = "";
    shouldResetScreen = false;
}

function clear() {
    screen.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}