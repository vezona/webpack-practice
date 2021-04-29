# DefinePlugin

process.env 是 webpack 自訂的環境變數
這單元要教怎麼自訂變數:使用 define plugin 這個套件(這個是 webpack 裡面內建的，所以不用另外安裝)
透過 definePlugin 就可以自訂 port (localhost:多少)

- 透過 webpack 定義變數給 JS 使用

```
process.env.你的變數名稱
```
