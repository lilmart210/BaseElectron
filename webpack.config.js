const htmlwebpackplugin = require('html-webpack-plugin');





module.exports = [
    {
      mode: 'development',
      entry: './src/react.tsx',
      target: 'electron-renderer',
      devtool : 'source-map',
      module: {
        rules: [{
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        }]
      },
      output: {
        path: __dirname + '/dist',
        filename: 'main.js'
      },
      plugins : [
        new htmlwebpackplugin({
            template : './src/index.html'
        })
      ]
    }
  ];