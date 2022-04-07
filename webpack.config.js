const path = require('path');


module.exports = {
  entry: [
    './src/scripts/index.js',
    // './src/scripts/home.js',
    // './src/scripts/menu.js',
    // './src/scripts/contact.js',
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    
    ],
  },
};