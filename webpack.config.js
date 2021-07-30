const webpack = require('webpack');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: "./in.js",
    module: {},
    resolve: {
        fallback: {
            fs: false,
            child_process: false,
            net: false,
            module: false,
            path: require.resolve("path-browserify"),
            tty: require.resolve("tty-browserify"),
        },
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};


