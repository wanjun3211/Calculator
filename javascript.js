function add(num1, num2) {
    return num1 + num2
}


function subtract(num1, num2) {
    return num1 - num2
}


function multiply(num1, num2) {
    return num1 * num2
}


function divide(num1, num2) {
    return num1 / num2
}

const num1 = 0;
const num2 = 0;
const operator = '';

function operate(num1, operator, num2) {
    let result = 'no result'

    if (operator === "add")
        result = add(num1, num2)

    if (operator === "subtract")
        result = subtract(num1, num2)

    if (operator === "multiply")
        result = multiply(num1, num2)

    if (operator === "divide")
        result = divide(num1, num2)

    return result

}