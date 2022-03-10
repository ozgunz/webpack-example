const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry : {
        home : ["./src/js/home.js", "./src/scss/home.scss"],
        profile: ["./src/js/profile.js","./src/scss/profile.scss"]
    },
    output: {
        path : __dirname,
        filename : "dist/js/[name].js",
    },
    mode: "production",
    watch: true,
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