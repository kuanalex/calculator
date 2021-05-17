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
clearButton.addEventListener("click", () => console.log("clear button pressed"));
deleteButton.addEventListener("click", () => console.log("delete button pressed"));
pointButton.addEventListener("click", () => console.log("decimal button pressed"));

