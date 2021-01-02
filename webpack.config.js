module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  //mode: "production",
  mode: 'development',
  optimization: {
    //minimize: true,
  },

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './typescript/script.ts',

  // 出力先
  output: {
    path: '/dist',
    filename: 'script.js',
  },

  // ソースマップ
  devtool: 'inline-source-map',

  // Webpack用開発サーバ
  devServer: {
    contentBase: './',
    hot: true, // HMR (Hot Module Replacement) を有効にする
    port: 1234, // ポートはご自由に…
  },

  // Webpackローダ
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // TypeScriptをトランスパイルする
      },
      {
        test: /\.(png|mp3)$/,
        use: 'file-loader?name=[name].[ext]', // バイナリをトランスパイルさせる
      },
    ],
  },

  // 拡張子
  resolve: {
    extensions: ['.ts', '.js', '.png', '.mp3'],
  },
};
