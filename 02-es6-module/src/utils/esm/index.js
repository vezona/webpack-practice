function privateFun(){
  console.log('this is privet function');
}

//export 是要把Js的function打包時輸出給其他檔案也能使用
export function add(a, b) {
  return a + b;
}


export function subtract(a, b) {
  return a - b;
}

class MyClass {
  foo(){
    console.log('foo');
  }
}

//每支JS檔只能有一個export default，但可以有多個export
export default MyClass; 