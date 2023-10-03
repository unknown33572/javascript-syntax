let person = {
  name: '홍길동',
  age: 16,
  address: '서울',
  fullInfo: function() {
    return this.name + ' ' + this.age + ' ' + this.address; // this는 person을 가리킴
  }
};

console.log(person.fullInfo());