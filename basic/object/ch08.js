let x = [1.3, 2.4, 3.5, 4.6, 5.7];

let numbersRounds = x.map(function (x) {
  return Math.round(x); // 소수점을 반올림한 정수를 반환.
}).filter(function (x) { // 그 후 정수가 3보다 큰지 확인하고 반환.
  return x > 3;
});

console.log(numbersRounds); // [ 1, 2, 4, 5, 6 ]

let numbersCeils = x.map(function (x) {
  return Math.ceil(x); // 소수점을 올림한 정수를 반환.
});

console.log(numbersCeils); // [ 2, 3, 4, 5, 6 ]

let numbersFloors = x.map(function (x) {
  return Math.floor(x); // 소수점을 내림한 정수를 반환.
});

console.log(numbersFloors); // [ 1, 2, 3, 4, 5 ]

let numbersTruncs = x.map(function (x) {
  return Math.trunc(x); // 소수점을 제거한 정수를 반환.
});

console.log(numbersTruncs); // [ 1, 2, 3, 4, 5 ]

let numbersMax = Math.max(...x); // 인수 중 가장 큰 수를 반환. ( 인수는 숫자로 전달해야 함. 비구조화 할당을 사용하여 배열을 전달할 수 있음. )

console.log(numbersMax); // [ 1.3, 2.4, 3.5, 4.6, 5.7 ]

let numbersMin = Math.min(...x); // 인수 중 가장 작은 수를 반환.

console.log(numbersMin); // [ 1.3, 2.4, 3.5, 4.6, 5.7 ]

let numbersRandom = Math.random(); // 0 이상 1 미만의 구간에서 랜덤 부동소수를 반환.

console.log(numbersRandom);

numbersRandom = Math.floor(Math.random() * 10); // 0 이상 10 미만의 구간에서 랜덤 정수를 반환.

console.log(numbersRandom);