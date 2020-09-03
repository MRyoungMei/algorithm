const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
    // publicPath:'dist/'
  },
  mode:'development',
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader'},
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve:{
    alias:{
      'vue$':"vue/dist/vue.esm.js"
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
}