const regexp = /Hello/;

console.log(regexp.test('Hello, World!')); // true

const regexp2 = new RegExp('Bye');

console.log(regexp2.test('Hello, World!')); // false

//정규식은 블로그에서 보다 자세히 다루도록 하겠습니다.