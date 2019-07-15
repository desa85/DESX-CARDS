var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, './dist')
  },
	
	plugins: [
		new HtmlWebpackPlugin({
			title: 'DESX-CARDS',
			template: "./src/index.html"
    }),
    new webpack.EnvironmentPlugin({
      "DESX_CARD_CLIENT_PORT": process.env.DESX_CARD_CLIENT_PORT
  })
	],


  devtool: "source-map",
  resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
		rules: [
			{
        test: /\.tsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
		]
  },

  externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},

	watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
	
	devServer: {
    contentBase: 'src',
    inline: true,
    hot: true,
    open: true,
    port: 3000
  }
};