try {
  throw "notExistFunction"; // 예외를 의도적으로 발생시킴
} catch(err) {
  console.log(err);
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
} finally {
  console.log('삑! 에러입니다.');
}