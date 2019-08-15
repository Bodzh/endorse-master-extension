const merge = require('webpack-merge');
const common = require('./webpack.config.babel.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    comments: false,
                    compress: {
                        warnings: false,
                        drop_console: true
                    }
                }
            })
        ]
    }
});