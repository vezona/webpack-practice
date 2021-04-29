/******/ (() => { // webpackBootstrap //這邊是webpack的模組化，就是把每支JS獨立放入一個function內，這樣變數就不會互相干擾
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
class WebpackClass{
  constructor(){
    console.log('WebpackClass constructor');
  }
  foo(){
    console.log('foo');
  }
}

const message = 'hi webpack';
console.log(message);

var obj = {name:'milkmidi'};

var spreadObj = {
  ...obj
}

(()=>{
  console.log(9527);
})();

var r = new WebpackClass();
r.foo();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWxrbWlkaS13ZWJwYWNrLWV4YW1wbGUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXZWJwYWNrQ2xhc3N7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgY29uc29sZS5sb2coJ1dlYnBhY2tDbGFzcyBjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGZvbygpe1xuICAgIGNvbnNvbGUubG9nKCdmb28nKTtcbiAgfVxufVxuXG5jb25zdCBtZXNzYWdlID0gJ2hpIHdlYnBhY2snO1xuY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbnZhciBvYmogPSB7bmFtZTonbWlsa21pZGknfTtcblxudmFyIHNwcmVhZE9iaiA9IHtcbiAgLi4ub2JqXG59XG5cbigoKT0+e1xuICBjb25zb2xlLmxvZyg5NTI3KTtcbn0pKCk7XG5cbnZhciByID0gbmV3IFdlYnBhY2tDbGFzcygpO1xuci5mb28oKTsiXSwic291cmNlUm9vdCI6IiJ9