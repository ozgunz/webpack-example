const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry : {
        index : ["./src/js/index.js", "./src/scss/index.scss"],
    },
    output: {
        path : __dirname,
        filename : "dist/js/[name].js",
    },
    mode: "development",
    watch: false,
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, //Babel
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './dist/css/[name].css',
                        }
                    },
                    'extract-loader', 'css-loader?-url', 'postcss-loader','sass-loader'
                ]
            }, //MiniCssExtractPlugin
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