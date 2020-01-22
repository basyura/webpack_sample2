const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ts/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'../images/',
          publicPath: path =>  "images/" + path,
          //the images will be emited to dist/assets/images/ folder
        }
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  },
};
