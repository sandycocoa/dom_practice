// // Operations
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// // User Inputs
// firstNumber.addEventListener("click", () => 
//     const number = document.querySelector("#numberButton");
// );

// secondNumber.addEventListener("click", () =>
//     const number = document.querySelector("#numberButton");
// );

// operator.addEventListener("click", () =>
//     const operator = document.querySelector("#operator");
// )

// // Calculate
// function operate(operator, firstNumber, secondNumber) {
//     if (operator === "add") {
//        return add(firstNumber, secondNumber);
//     } else if (operator === "subtract") {
//         return subtract(firstNumber, secondNumber);
//     } else if (operator === "multiply") {
//         return multiply(firstNumber, secondNumber);
//     } else if (operator === "divide") {
//         return divide(firstNumber, secondNumber
//     } else {
//         return "Error"
//     }
// }

// Operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// User Inputs
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const operator = document.querySelector("#operator");
const output = document.querySelector("#output");

// Calculate
function operate(firstNumber, secondNumber, operator) {
    if (operator === "add") {
       return add(firstNumber, secondNumber);
    } else if (operator === "subtract") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "multiply") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "divide") {
        return divide(firstNumber, secondNumber);
    } else {
        return "Error"
    }
}

// Event Listeners
firstNumber.addEventListener("click", () => {
    const number = document.querySelector("#numberButton").value;
    firstNumber.value = number;
});

secondNumber.addEventListener("click", () => {
    const number = document.querySelector("#numberButton").value;
    secondNumber.value = number;
});

operator.addEventListener("click", () => {
    const operator = document.querySelector("#operator").value;
});

equals.addEventListener("click", () => {
    const result = operate(parseFloat(firstNumber.value), parseFloat(secondNumber.value), operator.value)
    output.value = result;
});

console.log(operate(4, 2, "subtract"))