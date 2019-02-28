const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [ '@babel/plugin-transform-react-jsx'  ]
          }
        }
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' }
            ]
          },
          {
            test: /\.bpmn$/,
            use: 'raw-loader',
          },
          {
            exclude: /\.(js|html|json)$/,
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      'src/index.html',
      'src/index.css'
    ]),
  ]
};
