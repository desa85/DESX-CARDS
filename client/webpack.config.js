var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

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