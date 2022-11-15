const res = document.querySelector('#res');
const btns = document.querySelector('#btns');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() {
    res.innerHTML = displayValue;
}


btns.addEventListener('click',function(e) {
    const value = e.target.value;

    switch(e.target.value){
        case('+'):
        case('-'):
        case('*'):
        case('/'):
        case('='):
            handleOperator(value);
            break
        case('C'):
            clear();
            break;
        default:
            inputNumber(value);
    }
  
    updateDisplay();
});

function handleOperator(nextOperator) {
    const value = displayValue;

    if (operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate (firstValue, value, operator);

        displayValue = `${result}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function calculate (first, second, operator) {
    if (operator=== '+') {
        return Number(first) + Number(second);
    } else if (operator==='-'){
        return first - second;
    }else if (operator==='*'){
        return first * second;
    }else if (operator==='/'){
        return first / second;
    } 

    return second;
}


function inputNumber(num) {
    if (waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue=='0' ? num : displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function clear() {
    displayValue = '0';
}

