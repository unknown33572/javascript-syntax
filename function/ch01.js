function sayHello(name) { // 함수 선언식
  return 'Hello ' + name;
}

const sayGoodbye = function goodbye(name) { // 함수 표현식
  return 'Goodbye ' + name;
}

const sayGoodmorning = (name) => {
  return 'Goodmorning ' + name;
}

const sayAfternoon = name => {
  return 'Afternoon ' + name}
;

const sayEvening = name => `Evening ${name}`;

console.log(sayHello('홍길동'));
console.log(sayGoodbye('홍길동'));
console.log(sayGoodmorning('홍길동'));
console.log(sayAfternoon('홍길동'));
console.log(sayEvening('홍길동'));