const { resolve } = require('path')
const ServiceworkerPlugin = require('../lib/index')

module.exports = {
  mode: 'development',
  entry: {
    index: resolve(__dirname, '../src/sw.js')
  },
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist')
  },
  plugins: [
    new ServiceworkerPlugin({
      entry: ''
    })
  ]
}
