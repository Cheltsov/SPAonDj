let path = require("path")
let webpack = require("webpack")
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let FriendlyErrorWebpackPlugin = require("friendly-errors-webpack-plugin")

module.exports = {
  entry: ['./assets/js/app.js','./assets/sass/app.scss'],
  output: {
    path: path.resolve(__dirname,'./static'),
    publicPath: "static/",
    filename: "js/app.js",
    chunkFilename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract([
          //'vue-style-loader',
          'css-loader'
        ]),
      },
      {
        test:/\.scss$/,
        use:ExtractTextPlugin.extract([
          //vue-style.loader,
          'css-loader',
          'sass-loader'
        ]),
      },
      {
        test:/\.sass$/,
        use:ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader?intentedSyntax'
        ]),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          extractCSS:true,
          loaders:{
            'scss':ExtractTextPlugin.extract([
              'css-loader',
              'sass-loader'
            ]),
            'sass':ExtractTextPlugin.extract([
              'css-loader',
              'sass-loader?intentedSyntax'
            ]),
          },
        },
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets:['env','es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test:/\.{png|jpg|gif|svg}$/,
        loader:'file-loader',
        options: {
          name:'resources/image/[name].[ext]?[hash]',
          publicPath: '../'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.common.js',
      '~': path.join(__dirname, './assets/js'),
    },
    extensions: ['.js','.vue','.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay:true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorWebpackPlugin({clearConsole:true}),
    new webpack.optimize.CommonsChunkPlugin({
      childrens:true,
      async:true,
    }),
  ]
}
