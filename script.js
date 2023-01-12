function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return (b == 0) ? '🫣 don\'t be naughty' : a / b;
};

function operate(operator, a, b) {
    return operator(a, b);
}

// program starts here

let a = 2;
let b = 3;

/* console.log(operate(subtract, a, b)); */