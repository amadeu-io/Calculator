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

// program starts here
let inputSequence = [];
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', function() {
        let input = event.target.innerHTML;
        if (input == 'AC') {
            inputSequence = [];
            display.innerHTML = '';
        } else if (input == '=') {
            let a = inputSequence[0];
            let operator = inputSequence[1];
            let b = inputSequence[2];
            let result = operate(operator, a, b);
            console.log(result);
            display.innerHTML = result;
        } else {
            inputSequence.push(input);
            display.innerHTML = input;
            
        };
    });
}

