var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'weekday.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: { comments: false },
            compress: { warnings: false }
        })
    ]
}
