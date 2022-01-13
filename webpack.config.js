const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWEbpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js",".jsx", ".ts", ".tsx"]
},
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  
  plugins: [
    new HTMLWEbpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
    },
    ],
  },
};
