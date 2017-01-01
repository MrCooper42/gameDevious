var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './public/src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css', '.html']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader'
      ]
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      loader: 'raw-loader'
    }, {
      test: /\.scss$/,
      loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
    }, {
      test: /\.(jpg|jpeg|gif|png)$/,
      loader: 'file-loader?name=img/[path][name].[ext]'
    }, {
      test: /\.(eof|woff|woff2|svg)$/,
      loader: 'file-loader?name=img/[path][name].[ext]'
    }]
  },
  // modulesDirectories: ['node_modules'],

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
        // 'vendor', 'polyfills'
    }),

    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, '../public/src' // location of your src
    )
  ]
};
