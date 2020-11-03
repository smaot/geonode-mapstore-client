const path = require("path");

module.exports = function karmaConfig(config) {
    const testConfig = require('./MapStore2/build/testConfig')({
        files: [
            'tests.webpack.js',
            { pattern: './MapStore2/**/*', included: false }
        ],
        path: [
            path.join(__dirname, 'js'),
            path.join(__dirname, 'MapStore2', 'web', 'client')
        ],
        basePath: '.',
        testFile: 'tests.webpack.js',
        singleRun: true,
        alias: {
            '@js': path.join(__dirname, 'js'),
            '@mapstore/framework': path.join(__dirname, 'MapStore2', 'web', 'client')
        }
    });
    testConfig.webpack.module.rules = [{
        test: /\.jsx?$/,
        exclude: /(__tests__|node_modules|legacy|libs\\Cesium|libs\\html2canvas)\\|(__tests__|node_modules|legacy|libs\/Cesium|libs\/html2canvas)\/|webpack\.js|utils\/(openlayers|leaflet)/,
        enforce: "post",
        use: [
            {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            }
        ]
    }, ...testConfig.webpack.module.rules];
    config.set(testConfig);
};