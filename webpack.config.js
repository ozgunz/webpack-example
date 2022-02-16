const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    entry : ["./dist/js/app.bundle.js", "./dist/css/wizard.scss"],
    output: {
        path : __dirname,
        filename : "dist/js/app.js",
    },
    mode: "production",
    watch: true,
    plugins: [],
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