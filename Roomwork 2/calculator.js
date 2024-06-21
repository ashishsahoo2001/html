let display = document.getElementById('display');
let currentOperand = '';
let currentOperator = '';
let previousOperand = '';
let result = '';

function clearDisplay() 
{
    display.value = '';
    currentOperand = '';
    currentOperator = '';
    previousOperand = '';
    result = '';
}
function appendNumber(number) 
 {
    currentOperand += number;
    display.value = currentOperand;
 }

function appendOperator(operator)
{
    if (currentOperand === '') return;
    if (previousOperand !== '')
    {
        calculate();
    }
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate()
 {
    let operand1 = parseFloat(previousOperand);
    let operand2 = parseFloat(currentOperand);
    switch (currentOperator) 
    {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = currentOperand;
            break;
    }
    display.value = result;
    currentOperand = result.toString();
    previousOperand = '';
 }