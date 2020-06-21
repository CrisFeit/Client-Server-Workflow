require('dotenv/config');
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    proxy: {
      '/': `http://localhost:${process.env.PORT || 3000}`
    }
  },

  output: {
    path: path.resolve(__dirname, 'app/server/public/assets/')
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ]
  }
})