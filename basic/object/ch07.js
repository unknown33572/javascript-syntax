let myMap = new Map();

myMap.set("crong", "악어");
myMap.set("rupy", "비버");
myMap.set("pororo", "펭귄");

let friend = myMap.get("crong"); // 악어

console.log(friend);

console.log(myMap.has("펭귄"));
// set, map은 순서가 없는 데이터를 저장할 때 유용하게 사용할 수 있음.
// set메서드랑 map메서드는 모두 iterable 객체이므로 for...of문으로 순회 가능.