let i = 0;

while(i < 10) { // 조건이 true일 때까지 반복. 즉 i가 10보다 작을 때까지 반복
  console.log("지금 숫자는: " + i);
  i++;
}

let j = 10;
do {
  console.log("지금 숫자는: " + j);
  j++;
} while(j < 9); // do while문은 조건이 false여도 최소 한 번은 실행. 즉 j가 9보다 작을 때까지 반복. 그래서 while loop는 돌지않고 10이 한 번 출력됨