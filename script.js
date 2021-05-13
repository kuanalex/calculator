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
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
            if (e.target.matches('button')) {
                // Get the type of key that is clicked
                const key = e.target;
                const action = key.dataset.action;

                // Get the number of the key that was clicked and the current displayed number
                const keyContent = key.textContent;
                const displayedNum = display.textContent;

                // Keys without a data-action must be a number key
                if (!action) {
                    console.log('number key');
                }

                // If the key has a data-action attribute that is add, subtract, multiply or divide, it is an operator
                if (
                    action === 'add' ||
                    action === 'subtract' ||
                    action === 'multiply' ||
                    action === 'divide'
                ) {
                    key.classList.add('is-depressed')
                    console.log('operator key!');
                }

                if (action === 'decimal') {
                    console.log('decimal key!');
                }

                if (action === 'clear') {
                    console.log('clear key!');
                }

                if (action === 'calculate') {
                    console.log('equal key!');
                }

                // Update the display if the display shows "0"
                // Append the displays if the display is not "0"
                // Appened a decimal to the display number
                if (!action) {
                    if (displayedNum === '0') {
                        display.textContent = keyContent;
                    }
                }

                if (!action) {
                    if (displayedNum === '0') {
                        display.textContent = keyContent;
                    } else {
                        display.textContent = displayedNum + keyContent;
                    }
                }

                if (action === 'decimal') {
                    display.textContent = displayedNum + '.';
                }

                Array.from(key.parentNode.children)
                    .forEach(k => k.classList.remove('is-depressed'));
            }
        }



        // Determine the type of key pressed using data-action attribute







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