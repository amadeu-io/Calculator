function adder(a, b) {
    return parseFloat((+a + +b).toFixed(7));
};

function subtracter(a, b) {
    return parseFloat((+a - +b).toFixed(7))
};

function multiplyer(a, b) {
    return parseFloat((+a * +b).toFixed(7))
};

function divider(a, b) {
    return (b == 0) ? '🫣 don\'t be naughty' : parseFloat((+a / +b).toFixed(7));
};

function operate(operator, a, b) {
    if (operator == '+') {
        return adder(a, b);
    } if (operator == '-') {
        return subtracter(a, b);
    } if (operator == '*') {
        return multiplyer(a, b);
    } if (operator == '/') {
        return divider(a, b);
    };
}

// initial conditions
let numberSequence = '';
let a = 0;
let end = false;
let operatorInput = '';
let dotPressed = false;
let storeResult = 0;
let result = 0;

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const dot = document.getElementById('dot');
const pm = document.getElementById('pm');
const percent = document.getElementById('percent')

let resultant = false;
display.innerHTML = '0';

for (const number of numbers) {
    number.addEventListener('click', function() {
        let input = event.target.innerHTML

        if (end) { // same as AC
            display.innerHTML = '0';
            operatorInput = '';
            numberSequence = '';
            a = 0;
            result = 0;
            end = false;
        };
                
        numberSequence += input;
        console.log(numberSequence);
        display.innerHTML = numberSequence; 
    });
};

for (const operator of operators) {
    operator.addEventListener('click', function() {
        let input = event.target.innerHTML;
        dotPressed = false;

        if (end) { // operator is pressed after result
            operatorInput = input;
            a = storeResult;
            display.innerHTML = operatorInput;
            numberSequence = '';
            end = false;
        } else if (a) { // operator is pressed after num op num
            operatorInput = input;
            let result = operate(operatorInput, a, numberSequence);
            display.innerHTML = result;
            a = result;
            numberSequence = '';
        } else {  // operator is pressed after num
            operatorInput = input;
            a = numberSequence;
            display.innerHTML = operatorInput;
            numberSequence = '';
        };
    });
};

dot.addEventListener('click', function() {
    if (!dotPressed) { // if dot is not pressed
        numberSequence += '.';
        console.log(numberSequence);
        display.innerHTML = numberSequence;
        dotPressed = true;
    };
});

pm.addEventListener('click', function() {
    if (end) { // operator is pressed after result
        storeResult = -storeResult;
        console.log(storeResult);
        display.innerHTML = storeResult; 
    } else {
        numberSequence = -numberSequence;
        console.log(numberSequence);
        display.innerHTML = numberSequence; 
    };
});

percent.addEventListener('click', function() {
    if (end) { // operator is pressed after result
        storeResult = storeResult / 100;
        console.log(storeResult);
        display.innerHTML = parseFloat((storeResult).toFixed(7)); 
    } else {
        numberSequence = numberSequence / 100;
        console.log(numberSequence);
        display.innerHTML = parseFloat((numberSequence).toFixed(7)); 
    };

})

ac.addEventListener('click', function() {    
    display.innerHTML = '0';
    operatorInput = '';
    numberSequence = '';
    result = 0;
    storeResult = 0;
    a = 0;
    end = false;
    dotPressed = false;

});

equals.addEventListener('click', function() {
    if (operatorInput == '') { // if = is pressed after an operator, do nothing
        // do nothing
    } else { // compute result only if there is an operator input
        dotPressed = false;
        let result = operate(operatorInput, a, numberSequence);
        storeResult = result;
        console.log(result);
        display.innerHTML = result;
        end = true;
    }; 
});