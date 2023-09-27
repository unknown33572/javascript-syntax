function myFunction() {
  let carBrand = 'Hyundai'; // carBrand는 myFunction의 지역 변수
  console.log(carBrand);
}

myFunction();

// console.log(carBrand); // Local Scope로 인한 ReferenceError 발생

let carBrand2 = 'Kia'; // carBrand는 전역 변수

function myFunction2() {
  console.log(carBrand2);
}

myFunction2(); // Global Scope이기 때문에 Kia 출력