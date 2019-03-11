const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, argv) => { 
  let isProd = false;
  console.log(argv.mode); 
  if (argv.mode !== 'production') {
    console.log('We are outputing code in development mode! Non-minified.');
  } 
  if (argv.mode == 'production') {
    isProd = true;
    console.log('We are building code for production! Minified & ready to deploy.');
  }

  return{
  entry: "./src/index",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    // Add all resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"]
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  optimization: {
    minimize: isProd,
		minimizer: argv.mode === 'production' ? [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ] : []
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use:  [  
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader?sourceMap", // translates CSS into CommonJS
          "sass-loader?sourceMap" // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: 'assets',
            name: '[path][name].[ext]',
          },
        }
      }
    ]
  },
  plugins: [
    // Cleans dist folder when building project.
    new CleanWebpackPlugin(),
    // Html Webpack Plugin
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css",
      chunkFilename: "[name].css"
    })
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
}
};