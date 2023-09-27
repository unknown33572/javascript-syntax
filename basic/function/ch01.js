function sum(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        return "Divide by zero error";
    }
    return x / y;
}

function calculator(x, y, operator) { // 함수를 인자로 받을 수 있음
    return operator(x, y);
}

let secondCalculator = function (x, y, operator) {
    return operator(x, y);
}

let thirdCalculator = new Function('x', 'y', 'operator', 'return operator(x, y)');

console.log(calculator(2, 4, sum));
console.log(calculator(2, 4, subtract));
console.log(calculator(2, 4, multiply));
console.log(calculator(2, 4, divide));
console.log(calculator(2, 0, divide));

console.log(secondCalculator(3, 4, sum));

console.log(thirdCalculator(4, 5, sum));