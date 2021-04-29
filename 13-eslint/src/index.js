// 試著關閉 console.log 的檢查
import './css/app.scss';
import { add } from '@/utils';
// TODO 1
// // 這裡有測試 eslint 的 code
const abc = 10;
const test = function (a, b) {
  return a + b;
};
// //

$(() => {
  console.log('hi jQuery Ready');
});
console.log(add(1, 1));

// TODO 3
// 如果不想過eslint的檢查(可能載入的是第三方套件)
// 用註解的發法寫eslint-disable-line
var ignoreESLintLine = 0; // eslint-disable-line

// TODO 4
/* eslint-disable */
var a = 0;
var b = 1;
/* eslint-enable */
