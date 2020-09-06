const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const html_plugin=require("html-webpack-plugin");

module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
    // publicPath:'dist/'
<<<<<<< HEAD:dist/webpackStart/webpack.config.js
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.esm.js"
    },
=======
>>>>>>> 6859ff30514302e6dcb5c26e8d7eeff9ca492751:dist/webpackStart/build/base.config.js
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
<<<<<<< HEAD:dist/webpackStart/webpack.config.js
    new VueLoaderPlugin(),
    new webpack.BannerPlugin("最终解释权归MRyoung所有"),
    new html_plugin({
      template:"index.html"
    })
  ]
  
=======
    new VueLoaderPlugin()
  ],
>>>>>>> 6859ff30514302e6dcb5c26e8d7eeff9ca492751:dist/webpackStart/build/base.config.js
}