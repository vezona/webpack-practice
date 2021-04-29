const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'production';
const DEV_MODE = NODE_ENV === 'development';
const CONTENT_HASH = DEV_MODE ? '' : '-[contenthash]';

console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: `[name]${CONTENT_HASH}.js`, // filename是程式進入點
    // TODO
    chunkFilename: `[name]-chunk${CONTENT_HASH}.js`, //chunkFilename 是 引用第三方library時，會幫你賦予額外的名稱，習慣上會加 chunk 這個字
    path: path.resolve('dist'),
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    // TODO
    // 之前使用模組時，要引用要寫相對路徑./
    // 這邊是用@設定成絕對路徑，都從src資料夾下面開始找
    alias: {
      '@': path.resolve('src'),
    },
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
        use: [
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                MY_DATA: 'milkmidi',
              },
            },
          },
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
              name: '[path][name].[ext]?[contenthash:10]',
              esModule: false,
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: DEV_MODE ? '[name].css' : '[name]-[contenthash].css',
    }),
    // https://webpack.js.org/plugins/define-plugin/
    new Webpack.DefinePlugin({}),
  ],
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
  },
  // TODO start
  // 這邊是把第三方的library拆成一個獨立的JS
  optimization: {
    // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
            // 這邊的意思是，希望第三方的library都放到vender這個JS裡面去
            // 第三方library是指透過node_module中撈出的套件包 (透過npm install 安裝的)
          name: 'vendors',
          chunks: 'all', //有三種模式，但用chunks all就好，因為支援全部
          test: /[\\/]node_modules[\\/]/,  //只要是符合這個條件的 (從ode_module中撈出)，全部都放到verdors.js中
          priority: 10, //webpack最佳化時有個預設值default是負值，代表會比較晚處理；如果設高一點點，就可以優先處理
          // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroupscachegroupenforce
          enforce: true, //表示忽略其他設定檔，強制套用這個版本。因為webpack設定檔很多，會影響到在做最佳化的動作
        },
      },
    },
  },
  // TODO end
};
