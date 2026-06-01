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

const num1 = '';
const num2 = '';
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


const displayOnScreen = document.querySelector("#container > .display")

const buttons = document.querySelectorAll(".button")

let calculatorResult = ''

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        displayOnScreen.textContent += button.textContent

        if (button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/') {
            operator = button.textContent
        }


        if (button.textContent == '=') {

            const messageArray = displayOnScreen.textContent.split(operator)
            num1 = +messageArray[0]
            num2 = +messageArray[1]

            calculatorResult = operate(num1, num2, operator)

            displayOnScreen.textContent = calculatorResult

        }
    })
})










