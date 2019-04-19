var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module: {
     
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: 'babel-loader'
              }
          ]
    },

    resolve: {
        extensions: ['.js', '.es6']
      },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
