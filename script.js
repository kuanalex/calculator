// Listen for key presses and determine the type of key pressed
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = document.querySelector('.display');

//Reset the display when the page is refreshed
window.addEventListener('load', e => {
    display.value = "";
});

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Get the type of key that is clicked
        const key = e.target;
        const action = key.dataset.action;

        // Get the number of the key that was clicked and the current displayed number
        const keyContent = key.textContent;
        console.log(keyContent);
        const displayedNum = display.value;

        //Replace displayed number with clicked number if the previous key is an operator
        const previousKeyType = calculator.dataset.previousKeyType;
        console.log(previousKeyType);

        // Remove is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        // Keys without a data-action must be a number key
        // Update the display if the display shows "0"
        // Append the displays if the display is not "0"

        if (!action) {
            if (displayedNum === "" || previousKeyType === 'operator') {
                display.value = keyContent;
            } else {
                display.value = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number';
            console.log('number key');
        }

        // If the key has an action, it is an operator
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            console.log(firstValue);
            console.log(operator);
            console.log(secondValue);

            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator'
            ) {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;

                // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue;
            } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum;
            }


            // Add custom attribute to tell if the previous key is an operator key
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            console.log('operator key!');
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
            display.value = "";
            firstValue = 0;
            secondValue = 0;
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