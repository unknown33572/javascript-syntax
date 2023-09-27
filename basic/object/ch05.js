let now = new Date();

console.log(now); // 현재 시간을 출력.

let halloween = new Date(2016, 9, 31); // 특정 날짜 지정가능. 2016년 10월 31일.

console.log(halloween); // 2016-10-30T15:00:00.000Z

let happyNewYear = new Date("January 1, 2020"); // 문자열로도 지정가능. 2020년 1월 1일.

console.log(happyNewYear.toString()); // 2020-01-01T00:00:00.000Z

let christmasEve = new Date(2016, 11, 25); // 2016년 12월 24일. 0부터 시작하므로 26으로 지정.

console.log(christmasEve); // 2016-12-24T15:00:00.000Z

christmasEve.setDate(christmasEve.getDate() + 1); // 2016년 12월 25일로 변경.

console.log(christmasEve); // 2016-12-25T15:00:00.000Z