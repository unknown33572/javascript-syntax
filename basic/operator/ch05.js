let x = true && true;
let y = true && false;

console.log(x);
console.log(y);

x = true || true;
y = true || false;

console.log(x);
console.log(y);

x = !true;
y = !false;

console.log(x);
console.log(y);

const a = 90;
const b = 80;
const c = 70;
const d = 60;
const f = 59;

let score = 79;

const grade = (score >= a) ? 'A' : (score >= b) ? 'B' : (score >= c) ? 'C' : (score >= d) ? 'D' : 'F';

console.log(grade);