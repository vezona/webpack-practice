/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// http://es6-features.org/#Constants
var CLASS_NAME = 'webpackTutorial';
console.log("".concat(name, " hi, ").concat(CLASS_NAME));
var obj = {
  a: 1,
  b: 2,
  c: 3
};

var a = obj.a,
    rest = _objectWithoutProperties(obj, ["a"]);

var arr = [0, 1, 2, 3, 4];
var a0 = arr[0],
    a1 = arr[1];
var name = 'milkmidi';
var newObj = {
  name: name
};

var newObj2 = _objectSpread(_objectSpread({}, newObj), {}, {
  age: 18
});

var MyApp = /*#__PURE__*/function () {
  function MyApp() {
    _classCallCheck(this, MyApp);

    console.log('MyApp constructor');
  }

  _createClass(MyApp, [{
    key: "foo",
    value: function foo() {
      var _this = this;

      console.log('foo');
      this.addEventListener('click', function () {
        console.log(_this);
      });
    }
  }]);

  return MyApp;
}();

var app = new MyApp();

(function () {
  console.log('arrow function');
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJDTEFTU19OQU1FIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJvYmoiLCJhIiwiYiIsImMiLCJyZXN0IiwiYXJyIiwiYTAiLCJhMSIsIm5ld09iaiIsIm5ld09iajIiLCJhZ2UiLCJNeUFwcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxpQkFBbkI7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLFdBQWVDLElBQWYsa0JBQTJCSCxVQUEzQjtBQUVBLElBQUlJLEdBQUcsR0FBRztBQUFFQyxHQUFDLEVBQUUsQ0FBTDtBQUFPQyxHQUFDLEVBQUUsQ0FBVjtBQUFZQyxHQUFDLEVBQUU7QUFBZixDQUFWOztJQUNRRixDLEdBQWVELEcsQ0FBZkMsQztJQUFNRyxJLDRCQUFTSixHOztBQUV2QixJQUFJSyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFWO0lBQ09DLEUsR0FBVUQsRztJQUFORSxFLEdBQU1GLEc7QUFFakIsSUFBSU4sSUFBSSxHQUFHLFVBQVg7QUFDQSxJQUFJUyxNQUFNLEdBQUc7QUFBRVQsTUFBSSxFQUFKQTtBQUFGLENBQWI7O0FBRUEsSUFBSVUsT0FBTyxtQ0FDTkQsTUFETTtBQUVURSxLQUFHLEVBQUU7QUFGSSxFQUFYOztJQUtNQyxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWmQsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDRDs7OzswQkFDSztBQUFBOztBQUNKRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsV0FBS2MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ2YsZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsSUFBSWUsR0FBRyxHQUFHLElBQUlGLEtBQUosRUFBVjs7QUFFQSxDQUFDLFlBQU07QUFDTGQsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDRCxDQUZELEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cDovL2VzNi1mZWF0dXJlcy5vcmcvI0NvbnN0YW50c1xuXG5jb25zdCBDTEFTU19OQU1FID0gJ3dlYnBhY2tUdXRvcmlhbCc7XG5jb25zb2xlLmxvZyhgJHtuYW1lfSBoaSwgJHtDTEFTU19OQU1FfWApO1xuXG5sZXQgb2JqID0geyBhOiAxLGI6IDIsYzogMyB9O1xuY29uc3QgeyBhLCAuLi5yZXN0IH0gPSBvYmo7XG5cbmxldCBhcnIgPSBbMCwgMSwgMiwgMywgNF07XG5jb25zdCBbYTAsIGExXSA9IGFycjtcblxubGV0IG5hbWUgPSAnbWlsa21pZGknO1xudmFyIG5ld09iaiA9IHsgbmFtZSB9O1xuXG52YXIgbmV3T2JqMiA9IHtcbiAgLi4ubmV3T2JqLFxuICBhZ2U6IDE4XG59XG5cbmNsYXNzIE15QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ015QXBwIGNvbnN0cnVjdG9yJyk7XG4gIH1cbiAgZm9vKCkge1xuICAgIGNvbnNvbGUubG9nKCdmb28nKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIGFwcCA9IG5ldyBNeUFwcCgpO1xuXG4oKCkgPT4ge1xuICBjb25zb2xlLmxvZygnYXJyb3cgZnVuY3Rpb24nKTtcbn0pKCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=