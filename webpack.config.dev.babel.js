const merge = require('webpack-merge');
const common = require('./webpack.config.babel.js');
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new ChromeExtensionReloader({
            port: 8080, // Which port use to create the server
            reloadPage: true, // Force the reload of the page also
            entries: {
                contentScript: 'content',
                background: 'background'
            }
        })
    ],
    devtool: 'source-map'
});