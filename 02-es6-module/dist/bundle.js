/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_esm_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/esm/index */ "./src/utils/esm/index.js");
// esm 的話是使用import from這個方法引用JS模組模組
; //index.js可以省略


// 以上兩行可以整合成一行
// import MyClass, { add, subtract } from './utils/esm';

console.log("3 + 3 =", (0,_utils_esm_index__WEBPACK_IMPORTED_MODULE_0__.add)(3, 3));
console.log("10 - 5 =", (0,_utils_esm_index__WEBPACK_IMPORTED_MODULE_0__.subtract)(10, 5));

var myClass = new _utils_esm_index__WEBPACK_IMPORTED_MODULE_0__.default();
myClass.foo();

// commonjs 的話是使用require這個方法引用JS模組模組
const utils = __webpack_require__(/*! ./utils/commonjs */ "./src/utils/commonjs/index.js");

console.log('2 * 2 = ', utils.multiply(2, 2));
console.log('2 / 2 = ', utils.divide(2, 2));


/***/ }),

/***/ "./src/utils/commonjs/index.js":
/*!*************************************!*\
  !*** ./src/utils/commonjs/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
//跟es6的差別在於它只能export模組，不能export default
module.exports = {
  multiply: multiply,
  divide: divide,
};

/***/ }),

/***/ "./src/utils/esm/index.js":
/*!********************************!*\
  !*** ./src/utils/esm/index.js ***!
  \********************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function privateFun(){
  console.log('this is privet function');
}

//export 是要把Js的function打包時輸出給其他檔案也能使用
function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}

class MyClass {
  foo(){
    console.log('foo');
  }
}

//每支JS檔只能有一個export default，但可以有多個export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyClass); 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWxrbWlkaS13ZWJwYWNrLWV4YW1wbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWlsa21pZGktd2VicGFjay1leGFtcGxlLy4vc3JjL3V0aWxzL2NvbW1vbmpzL2luZGV4LmpzIiwid2VicGFjazovL21pbGttaWRpLXdlYnBhY2stZXhhbXBsZS8uL3NyYy91dGlscy9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWlsa21pZGktd2VicGFjay1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbGttaWRpLXdlYnBhY2stZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWlsa21pZGktd2VicGFjay1leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWlsa21pZGktd2VicGFjay1leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWlsa21pZGktd2VicGFjay1leGFtcGxlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLENBQWtEO0FBQ1Y7O0FBRXhDO0FBQ0Esb0JBQW9CLGdCQUFnQjs7QUFFcEMsdUJBQXVCLHFEQUFHO0FBQzFCLHdCQUF3QiwwREFBUTs7QUFFaEMsa0JBQWtCLHFEQUFPO0FBQ3pCOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHVEQUFrQjs7QUFFeEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsT0FBTyxFOzs7Ozs7VUNyQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc20g55qE6Kmx5piv5L2/55SoaW1wb3J0IGZyb23pgJnlgIvmlrnms5XlvJXnlKhKU+aooee1hOaooee1hFxuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gXCIuL3V0aWxzL2VzbS9pbmRleFwiOyAvL2luZGV4Lmpz5Y+v5Lul55yB55WlXG5pbXBvcnQgTXlDbGFzcyBmcm9tICcuL3V0aWxzL2VzbS9pbmRleCc7XG5cbi8vIOS7peS4iuWFqeihjOWPr+S7peaVtOWQiOaIkOS4gOihjFxuLy8gaW1wb3J0IE15Q2xhc3MsIHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gJy4vdXRpbHMvZXNtJztcblxuY29uc29sZS5sb2coXCIzICsgMyA9XCIsIGFkZCgzLCAzKSk7XG5jb25zb2xlLmxvZyhcIjEwIC0gNSA9XCIsIHN1YnRyYWN0KDEwLCA1KSk7XG5cbnZhciBteUNsYXNzID0gbmV3IE15Q2xhc3MoKTtcbm15Q2xhc3MuZm9vKCk7XG5cbi8vIGNvbW1vbmpzIOeahOipseaYr+S9v+eUqHJlcXVpcmXpgJnlgIvmlrnms5XlvJXnlKhKU+aooee1hOaooee1hFxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2NvbW1vbmpzJyk7XG5cbmNvbnNvbGUubG9nKCcyICogMiA9ICcsIHV0aWxzLm11bHRpcGx5KDIsIDIpKTtcbmNvbnNvbGUubG9nKCcyIC8gMiA9ICcsIHV0aWxzLmRpdmlkZSgyLCAyKSk7XG4iLCJmdW5jdGlvbiBtdWx0aXBseShhLCBiKSB7XG4gIHJldHVybiBhICogYjtcbn1cblxuZnVuY3Rpb24gZGl2aWRlKGEsIGIpIHtcbiAgcmV0dXJuIGEgLyBiO1xufVxuLy/ot59lczbnmoTlt67liKXlnKjmlrzlroPlj6rog71leHBvcnTmqKHntYTvvIzkuI3og71leHBvcnQgZGVmYXVsdFxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG11bHRpcGx5OiBtdWx0aXBseSxcbiAgZGl2aWRlOiBkaXZpZGUsXG59OyIsImZ1bmN0aW9uIHByaXZhdGVGdW4oKXtcbiAgY29uc29sZS5sb2coJ3RoaXMgaXMgcHJpdmV0IGZ1bmN0aW9uJyk7XG59XG5cbi8vZXhwb3J0IOaYr+imgeaKikpz55qEZnVuY3Rpb27miZPljIXmmYLovLjlh7rntablhbbku5bmqpTmoYjkuZ/og73kvb/nlKhcbmV4cG9ydCBmdW5jdGlvbiBhZGQoYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuXG5jbGFzcyBNeUNsYXNzIHtcbiAgZm9vKCl7XG4gICAgY29uc29sZS5sb2coJ2ZvbycpO1xuICB9XG59XG5cbi8v5q+P5pSvSlPmqpTlj6rog73mnInkuIDlgItleHBvcnQgZGVmYXVsdO+8jOS9huWPr+S7peacieWkmuWAi2V4cG9ydFxuZXhwb3J0IGRlZmF1bHQgTXlDbGFzczsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9