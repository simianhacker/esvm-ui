var path = require('path');
var join = path.join;
var webpack = require('webpack');
module.exports =  {
  devtool: 'source-map',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer!sass-loader?outputStyle=expanded' + '&sourceMap'},
      { test: /\.html/, loader: 'raw-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff&name=[hash].[ext]" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[hash].[ext]" }
    ]
  },
  resolveLoader: {
    root: join(__dirname, 'node_modules')
  },
  resolve: {
    extensions: ['', '.js', '.json', '.html'],
    modulesDirectories: [
      'src',
      'src/client',
      'node_modules'
    ],
    root: [ path.resolve(__dirname, './src') ]
  }
};

