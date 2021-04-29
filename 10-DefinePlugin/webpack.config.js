const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require("webpack");

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

const CONTENT_HASH = DEV_MODE ? '' : '-[contenthash]';

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: `[name]${CONTENT_HASH}.js`,
    path: path.resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.pug$/,
        use:[
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                MY_DATA: 'milkmidi'
              }
            },
          }
        ],
        include: path.resolve('src/html'),
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[path][name].[ext]?[hash:10]',
              esModule: false,
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: `style${CONTENT_HASH}.css`,
    }),
    // https://webpack.js.org/plugins/define-plugin/
    // TODO: 1 start
    new Webpack.DefinePlugin({
      // Webpack.DefinePlugin 基本上是專門餵給JS的，如果想要給pug 或scss等其他，要另外寫
      'process.env' : {
        // 這邊的意思是，除了布林值跟數字之外，其他型別都要用.stringify 去把它包裝成字串模式
        DEF_BOO: true,
        DEF_NUM: 9527, 
        // 如果不換成字串的話，編譯的過程會失敗，因為文字會直接變成字串塞在程式內，然後在production的模式下webpack會幫你壓縮成一行，但就會壓縮失敗並拋出錯誤
        DEF_OBJ: JSON.stringify({ obj: 'milkmidi' }),
        // DEF_STR: "hi webpack",//這樣會有問題，webpack壓縮過程中一定要JSON.stringify，否則會壓縮失敗
        DEF_STR: JSON.stringify("我是中文字"),
        WEB_URL: JSON.stringify(
          DEV_MODE ? 
          'http://localhost' 
          : 'https://www.google.com'
        ),
      }
    }),
    // TODO: 1 end
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
};