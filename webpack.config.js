const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWEbpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill",'./src/index.jsx'],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devServer:{
        port: 3000,
        historyApiFallback: true,
    },

    plugins:[
        new HTMLWEbpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ],

    module:{
        rules:[
            {
                test: /\.(css|sass|scss)$/,
                use:['style-loader','css-loader', 'sass-loader'],

            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
                options:{
                        presets:["@babel/preset-env"]
                    }
        },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-react","@babel/preset-env"]
                    }
            }
        ]
    }
}