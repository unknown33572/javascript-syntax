let person = new Object();

person.name = '이름';
person.age = '나이';

console.log(person);

person.getAddress = function() {
  return '주소';
}

console.log(person.getAddress());