const stringSample = 'Hello World, Bye World';

console.log(stringSample.length); // 띄어쓰기까지 포함한 문자열의 길이를 반환.

console.log(stringSample.indexOf("World")); // 문자열에서 찾고자 하는 문자열의 첫 번째 인덱스를 반환.

console.log(stringSample.lastIndexOf("World")); // 문자열에서 찾고자 하는 문자열의 마지막 인덱스를 반환.

console.log(stringSample.slice(0, 5)); // 문자열의 시작 인덱스와 끝 인덱스를 지정하여 문자열을 추출.

console.log(stringSample.replace("World", "Earth")); // 문자열에서 찾고자 하는 문자열을 새로운 문자열로 대체.
console.log(stringSample); // 원본 문자열은 변하지 않음.

console.log(stringSample.toUpperCase()); // 문자열을 대문자로 변환.
console.log(stringSample.toLowerCase()); // 문자열을 소문자로 변환.

console.log(stringSample.substring(6, 11)); // 문자열의 시작 인덱스와 끝 인덱스를 지정하여 문자열을 추출. slice와 동일하게 동작하지만 음수를 사용할 수 없음.

console.log(stringSample.substr(6, 5)); // 문자열의 시작 인덱스와 추출할 문자열의 길이를 지정하여 문자열을 추출.

console.log(stringSample.concat("!", "!")); // 문자열을 연결.

console.log(stringSample.trim()); // 문자열의 앞뒤 공백을 제거.

console.log(stringSample.charAt(11)); // 문자열에서 인덱스에 해당하는 문자를 반환.

console.log(stringSample.split(",")); // 문자열을 구분자를 기준으로 나누어 배열로 반환.

console.log(stringSample.charCodeAt(0)); // 문자열에서 인덱스에 해당하는 문자의 아스키 코드를 반환.