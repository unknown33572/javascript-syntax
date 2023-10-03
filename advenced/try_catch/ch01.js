try {
  notExistFunction(); // 없는 에러
} catch(err) {
  console.log(err);
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
} finally {
  console.log('삑! 에러입니다.');
}