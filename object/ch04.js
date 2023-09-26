let fruits = ["apple", "orange", "melon"];

console.log(fruits.toString()); // 배열을 문자열로 변환.

console.log(fruits.join(" | ")); // 배열을 해당 구분자를 기준으로 문자열로 변환.

console.log(fruits.pop()); // 배열의 마지막 요소를 제거하고 반환.
console.log(fruits); // 원본 배열은 변함.

console.log(fruits.push("banana")); // 배열의 마지막에 요소를 추가하고 배열의 길이를 반환.
console.log(fruits);

console.log(fruits.shift()); // 배열의 첫 번째 요소를 제거하고 반환.
console.log(fruits);

console.log(fruits.unshift("strawberry")); // 배열의 첫 번째에 요소를 추가하고 배열의 길이를 반환.
console.log(fruits);

console.log(fruits.splice(1, 1, "Lemon")); // 배열의 특정 위치에 요소를 제거하고 제거한 요소를 배열로 반환. ( 시작 인덱스, 제거할 요소의 개수, 추가할 요소 )
console.log(fruits);

let vegetables = ["cucumber", "tomato", "carrot"];

let combine = fruits.concat(vegetables); // 배열을 연결하여 새로운 배열을 반환.
console.log(combine);

console.log(combine.slice(2, 4)); // 배열의 시작 인덱스와 끝 인덱스를 지정하여 배열을 추출.
console.log(combine); // 원본 배열은 변하지 않음.

console.log(combine.reverse()); // 배열의 순서를 반대로 변경.

console.log(combine.sort()); // 배열을 정렬. ( 기본적으로 오름차순 정렬 ) ( 숫자는 문자열로 변환되어 정렬. )

const numbers = [2, 3, 5, 4, 1];

console.log(numbers.sort()); // 숫자를 오름차순 정렬.
console.log(numbers.sort(function(x,y){return y-x})); // 숫자를 내림차순 정렬.