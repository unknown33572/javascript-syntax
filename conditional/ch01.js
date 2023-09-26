let age = 19;
let busFee = 0;

if(age <= 8) {
  busFee = 0;
} else if(age >= 8 && age <= 19) {
  busFee = 1000;
} else if(age >= 20 && age <= 59) {
  busFee = 2000;
} else {
  busFee = 0;
}

console.log(busFee); // 1000