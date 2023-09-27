let data = {
  "person" : [
    {"firstName" : "John", "lastName" : "Doe"},
    {"firstName" : "Anna", "lastName" : "Smith"},
    {"firstName" : "Peter", "lastName" : "Jones"}
  ]
};

let stringValue = JSON.stringify(data); // JSON 객체를 문자열로 변환

console.log(stringValue);

let text = '{ "person" : [' +
  '{ "firstName" : "John", "lastName" : "Doe" },' +
  '{ "firstName" : "Anna", "lastName" : "Smith" },' +
  '{ "firstName" : "Peter", "lastName" : "Jones" } ]}';

let obj = JSON.parse(text); // 문자열을 JSON 객체로 변환

console.log(obj);