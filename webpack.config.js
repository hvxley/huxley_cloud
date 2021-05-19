const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'public'),
  },
};
