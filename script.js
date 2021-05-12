// const button = document.querySelector(".calc-button");
// button.addEventListener("click", (event) => {
//     console.log(event.target.id);
// });

// This code adds an event listener for each of the buttons on the calculator
// Currently, clicking the button will console log the button ID
// I will be using these button IDs to help with the calculations later

const buttons = document.querySelectorAll(".calc-button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(event.target.id);
    })
});