import path from 'path';
import webpack from 'webpack';
import qs from 'querystring';

import autoprefixer from 'autoprefixer';
import AssetsPlugin from 'assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const root = process.cwd();
const src  = path.join(root, 'src');
const build = path.join(root, 'build');

const clientSrc    = path.join(src, 'client');
const universalSrc = path.join(src, 'universal');

const clientInclude = [clientSrc, universalSrc];

// Cache vendor && client javascript on CDN...
const vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux',
  'cio'
];

export default {
  context: src,
  entry: {
    app: [
      'babel-polyfill/dist/polyfill.js',
      './client/client.js'
    ],
    vendor
  },
  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: build,
    publicPath: '/static/',
    sourceMapFilename: '[name]_[chunkhash].js.map',
  },
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
    unsafeCache: true
  },
  node: {
    dns: 'mock',
    net: 'mock'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({filename: '[name].css', allChunks:true}),
    new webpack.NormalModuleReplacementPlugin(/\.\.\/routes\/static/, '../routes/async'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    /* minChunkSize should be 50000 for production apps
     * 10 is for this example */
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}, comments: /(?:)/}),
    new AssetsPlugin({path: build, filename: 'assets.json'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [{
      test: /\.(png|j|jpeg|gif|svg|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    },
    {
      test: /\.json$/,
      use: ['json-loader'],
    },
    // JavaScript
    {
      test: /\.jsx?$/,
      use: [ 'babel-loader', ],
      exclude: /node_modules/,
      include: clientInclude
    },
     // CSS
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      })
    }]
  }
};
