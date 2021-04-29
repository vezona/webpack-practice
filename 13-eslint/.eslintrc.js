module.exports = {
  // 目前專案是在什麼環境執行, 如果沒有設定 browser:true, 那就不會有 window 物件
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 告訴Eslint直接採用 airbnb-base eslint 設定
  extends: [
    'airbnb-base',
  ],
  // globals 變數，一般指的都是 windows.xxx 變數
  // 如果有變數沒有宣告就直接使用，就會報錯
  globals: {
    $: 'readonly',
  },
  parser: 'babel-eslint',
  settings: {
    // eslint 可以讀取 webpack alias 設定
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
