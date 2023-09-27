function getPerson() {
  return {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    adress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001"
    }
  }
}

let {firstName, lastName, ...rest} = getPerson(); // Object로 데이터를 반환

console.log(firstName);
console.log(lastName);
console.log(rest);

console.log(rest.age);

console.log(rest.adress.postalCode);