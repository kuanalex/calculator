// const button = document.querySelector(".calc-button");
// button.addEventListener("click", (event) => {
//     console.log(event.target.id);
// });

// This code adds an event listener for each of the buttons on the calculator
// Currently, clicking the button will console log the button ID
// I will be using these button IDs to help with the calculations later
// Rework this function to display the value of the button when

// Listen for key presses and determine the type of key pressed
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Get the type of key that is clicked
        const key = e.target;
        const action = key.dataset.action;

        // Get the number of the key that was clicked and the current displayed number
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        //Replace displayed number with clicked number if the previous key is an operator
        const previousKeyType = calculator.dataset.previousKeyType;

        // Remove is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        // Keys without a data-action must be a number key
        // Update the display if the display shows "0"
        // Append the displays if the display is not "0"

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number';
            console.log('number key');
        }

        // If the key has a data-action attribute that is add, subtract, multiply or divide, it is an operator
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            // Add custom attribute to tell if the previous key is an operator key
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            console.log('operator key!');
        }

        if (firstValue && operator) {
            display.textContent = calculate(firstValue, operator, secondValue);
        }

        // Append a decimal to the number if the decimal key is pressed
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            calculator.dataset.previousKey = 'decimal';
            console.log('decimal key!');
        }

        if (action === 'clear') {
            calculator.dataset.previousKey = 'clear';
            console.log('clear key!');
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKey = 'calculate';
            console.log('equal key!');
        }
    }
})

const calculate = (n1, operator, n2) => {
    let result = '';

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
}