var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'weekday.min.js',
        library: 'weekday',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: { comments: false },
            compress: { warnings: false }
        })
    ]
}
