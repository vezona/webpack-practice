// process.env.NODE_ENV 是 webpack 內建的環境變數，由 webpack mode 設定取得
console.log(process.env.NODE_ENV); 

console.log('hi webpack');


//本機開發跟發布時使用不同的domain call api，這邊就設定判斷不同的開發環境用不同domain
var apiURL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost'
  : 'https://5xruby.tw/';

console.log(apiURL);


// 這邊是在本機的時候寫測試的code，設定環境變數是development，這樣在發布時(production) webpack會知道這段用不到，就會把這段整個拿掉
if (process.env.NODE_ENV === 'development') {
  var someTestCode = 'development';
  alert(someTestCode);
}