const brands = ['Apple', 'Samsung', 'Sony', 'Xiaomi', 'LG', 'HP'];

for(let i = 0; i < brands.length; i++) {
  console.log(brands[i]); // brands[0] -> brands[1] -> brands[2] -> brands[3] -> brands[4] -> brands[5] i번째 배열의 값을 출력
}

const person = [
  {name: '배추도사', age: 20},
  {name: '무도사', age: 22},
  {name: '콩도사', age: 24}
];

// 데이터 타입 중 배열뿐만 아니라 객체도 가능
for(const key in person) {
  console.log(person[key].name); // person[0] -> person[1] -> person[2] key값을 출력
  console.log(person[key].age); // person[0] -> person[1] -> person[2] key값을 출력
}

// Array, Set, Map, String, TypedArray, arguments 객체 등 iterable한 객체도 가능
for(const element of person) {
  console.log(element.name); // person[0] -> person[1] -> person[2] element값을 출력
  console.log(element.age); // person[0] -> person[1] -> person[2] element값을 출력
}

for(const element in 'Hello') {
  console.log(element); // 인덱스를 출력
}

for(const element of 'Hello') {
  console.log(element); // 문자열을 출력
}