const htmlPligin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist'
  },
  plugins: [
   new htmlPligin({
     filename: 'index.html',
     template: './src/index.html'
   })
  ],
  resolve: {
    extensions: ['.js']
  }
}