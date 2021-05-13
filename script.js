// const button = document.querySelector(".calc-button");
// button.addEventListener("click", (event) => {
//     console.log(event.target.id);
// });

// This code adds an event listener for each of the buttons on the calculator
// Currently, clicking the button will console log the button ID
// I will be using these button IDs to help with the calculations later
// Rework this function to display the value of the button when

// Listen for key presses and determine the type of key pressed
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-buttons')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // do something here...
    }
})


// Determine the type of key pressed using data-action attribute
const key = e.target
const action = key.dataset.action


// Keys without a data-action must be a number key
if (!action) {
    console.log('number key')
}

// If the key has a data-action attribute that is add, subtract, multiply or divide, it is an operator
if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}



// const buttons = document.querySelectorAll(".calc-button");
// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => updateDisplay(event.target.textContent, displayString));
// })

// function updateDisplay(string, array) {
//     if (!isNaN(parseInt(string))) {
//         array.push(string);
//         document.getElementById("display").innerHTML = console.log(array.join(""));
//     }
// }