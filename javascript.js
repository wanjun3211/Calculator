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

let num1 = '';
let num2 = '';
let operator = '';

function operate(num1, operator, num2) {
    let result = 'no result'

    if (operator === "+")
        result = add(num1, num2)

    if (operator === "-")
        result = subtract(num1, num2)

    if (operator === "*")
        result = multiply(num1, num2)

    if (operator === "/")
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

            const messageArray1 = displayOnScreen.textContent.split(operator)
            num1 = +messageArray1[0]


            const messageArray2 = messageArray1[1].split('=')
            num2 = +messageArray2[0]

            console.log(`num1: ${num1}`)
            console.log(`num2: ${num2}`)
           

            calculatorResult = operate(num1, operator, num2)

            // console.log(`calcularot result: ${calculatorResult}`)

            displayOnScreen.textContent = calculatorResult

        }
    })
})










