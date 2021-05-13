// const button = document.querySelector(".calc-button");
// button.addEventListener("click", (event) => {
//     console.log(event.target.id);
// });

// This code adds an event listener for each of the buttons on the calculator
// Currently, clicking the button will console log the button ID
// I will be using these button IDs to help with the calculations later
// Rework this function to display the value of the button when
let displayString = [];

const buttons = document.querySelectorAll(".calc-button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => updateDisplay(event.target.textContent, displayString));
})

function updateDisplay(string, array) {
    if (!isNaN(parseInt(string))) {
        array.push(string);
        document.getElementById("display").innerHTML = console.log(array.join(""));
    }
}