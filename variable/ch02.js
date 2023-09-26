let sample = "Hello World"; // string
let sample2 = 1; // number
let sample3 = true; // boolean
let sample4 = null; // null
let sample5 = undefined; // undefined
let sample6 = Symbol("Hello World"); // symbol
let sample7 = {
  name: "S",
  age: null
}; // object
let sample8 = [
  {animal: "dog"},
  {animal: "cat"}
]; // array
let sample9 = function(e) {
  console.log(e);
}; // function
console.log(
  sample,
  sample2,
  sample3,
  sample4,
  sample5,
  sample6,
  sample7,
  sample8,
  sample9
);
sample9("Bye World");
/*
Hello World
1
true
null
undefined
Symbol(Hello World)
{}
[]
[Function: sample9]
Bye World
*/