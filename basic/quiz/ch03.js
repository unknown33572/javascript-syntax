let calculator = function (x, y, operator) {
  if(operator === '+') {
    return x + y;
  } else if(operator === '-') {
    return x - y;
  } else if(operator === '*') {
    return x * y;
  } else if(operator === '/') {
    return x / y;
  } else {
    return '잘못된 연산자입니다.';
  }
}

console.log(calculator(2, 4, '+'));
console.log(calculator(2, 4, '-'));
console.log(calculator(2, 4, '*'));
console.log(calculator(2, 4, '/'));

console.log(calculator(2, 4, '%'));