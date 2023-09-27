let myExec;

function myFunc() {
  myExec = setTimeout(function () {
    console.log("5 second later Hello World!");
  }, 5000); // 두 번째 인자 값은 밀리초 단위 (1초 = 1000밀리초)
}

myFunc();

function myStopFunc() {
  clearTimeout(myExec); // myExec에 할당된 setTimeout() 함수 실행 취소
}

myStopFunc(); // myFunc() 실행 취소