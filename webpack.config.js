const path = require('path');
const extract = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    context : path.resolve(__dirname,'client'),
    entry: ['./js/index.js','./scss/style.scss'],
    output: {
        path: path.resolve(__dirname, 'public/assets')
    },

    devServer : {
        proxy : {
            '/': 'http://localhost:3000'
        }
    },

    plugins: [
        new extract({
            filename: 'style.css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: extract.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    }
}