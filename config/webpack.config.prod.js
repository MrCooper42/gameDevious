const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
// const AotPlugin = require('@ngtools/webpack').AotPlugin;
// const CompressionPlugin = require('compression-webpack-plugin');
// const CommonChunkPlugin = webpack.optimize.CommonChunkPlugin;
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.smart(commonConfig, {
  entry: {
    // 'polyfills': '../public/src/polyfills'
    'app': './public/src/main.aot'
  },

  output: {
    path: './public/js/app',
    filename: 'bundle.js',
    publicPath: '/js/app/',
    chunkFilename: '[id].[hash].chunk.js'
  },

  // module: {
  //   loaders: [{
  //     test: /\.ts$/,
  //     loader: [
  //       'awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader'
  //     ]
  //   }]
  // },

  plugins: [
    // new AotPlugin({
    //   tsConfigPath: './tsconfig.aot.json',
    //   entryModule: './public/src/app/app.module#AppModule'
    // }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
      // beautify: false,
      // mangle: {
      //   screw_ie8: true,
      //   keep_fnames: true
      // },
      // compress: {
      //   warnings: false,
      //   screw_ie8: true
      // },
      // comments: false
    })
  ]
});
