let mySet = new Set();

mySet.add("crong");
mySet.add("pororo");
mySet.add("rupy");

console.log(mySet.size); // 3

console.log(mySet.has("crong")); // true

mySet.delete("crong");

console.log(mySet.has("crong")); // false

// mySet.clear(); // 모든 요소를 제거.

mySet.forEach(function(item) {
  console.log(item);
});

// set은 중복된 데이터를 저장하지 않음.