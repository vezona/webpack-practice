// esm 的話是使用import from這個方法引用JS模組模組
import { add, subtract } from "./utils/esm/index"; //index.js可以省略
import MyClass from './utils/esm/index';

// 以上兩行可以整合成一行
// import MyClass, { add, subtract } from './utils/esm';

console.log("3 + 3 =", add(3, 3));
console.log("10 - 5 =", subtract(10, 5));

var myClass = new MyClass();
myClass.foo();

// commonjs 的話是使用require這個方法引用JS模組模組
const utils = require('./utils/commonjs');

console.log('2 * 2 = ', utils.multiply(2, 2));
console.log('2 / 2 = ', utils.divide(2, 2));
