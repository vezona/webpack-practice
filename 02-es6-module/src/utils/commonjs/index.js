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