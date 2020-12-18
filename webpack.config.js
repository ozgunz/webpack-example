const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    entry : ["./src/js/index.js"],
    output: {
        path : __dirname,
        filename : "dist/build.js",
    },
    mode: "production",
    //watch: true,
    plugins: [new MiniCssExtractPlugin({filename:'./dist/build.css'})],
    module: {
        rules: [
            {
                test: /\.scss$/,
                //use: ['style-loader','css-loader','sass-loader'],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            }, //MiniCssExtractPlugin
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            } //Babel
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin({sourceMap:true}),
        ],
    },

}