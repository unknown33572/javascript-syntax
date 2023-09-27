let i = 0;
let fnc = setInterval(function() { // setInterval() 함수는 setInterval() 함수가 실행된 후에도 계속해서 실행
  console.log("3초마다 프로그램이 실행됩니다." + i + "번째");
  if(i == 3) {
    clearInterval(fnc);
  }
  i++;
}, 3000);
