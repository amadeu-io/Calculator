function adder(a, b) {
    return +a + +b;
};

function subtracter(a, b) {
    return +a - +b;
};

function multiplyer(a, b) {
    return +a * +b;
};

function divider(a, b) {
    return (b == 0) ? '🫣 don\'t be naughty' : +a / +b;
};

function percenter(a) {
    return +a / 100;
};

function changeSign(a) {
    return +a * (-1);
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
    } if (operator == '%') {
        return percenter(a);
    } if (operator == '+ / -') {
        return changeSign(a);
    };
}

// initial conditions
let inputSequence = [];
let numberSequence = '';
let a = 0;
let end = false;

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');

let resultant = false;
display.innerHTML = '0';

for (const number of numbers) {
    number.addEventListener('click', function() {
        let input = event.target.innerHTML

        if (end) { // same as AC
            display.innerHTML = '0';
            operatorInput = '';
            numberSequence = '';
            result = 0;
            a = 0;
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
        if (a) { // chains operations / && numberSequence != '' ??maybe
            let result = operate(operatorInput, a, numberSequence);
            console.log('yess');
            display.innerHTML = result;
            operatorInput = input;
            a = result;
            numberSequence = '';
        } else {  
            operatorInput = input;
            a = numberSequence;
            display.innerHTML = operatorInput;
            numberSequence = '';
        };
    });
};

ac.addEventListener('click', function() {    
    display.innerHTML = '0';
    operatorInput = '';
    numberSequence = '';
    result = 0;
    a = 0;
    end = false;
});

equals.addEventListener('click', function() {
    let result = operate(operatorInput, a, numberSequence);
    console.log(result);
    display.innerHTML = result;
    end = true;
});