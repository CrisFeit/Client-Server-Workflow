const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app/client'),
    entry: [
        './scripts/index.js',
        './styles/style.css',
    ],

    output: {
        path: path.resolve(__dirname, 'app/public/assets')
    },

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
            }
        ]
    }
}