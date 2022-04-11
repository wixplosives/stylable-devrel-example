const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const { noCollisionNamespace } = require('@stylable/core');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new StylableWebpackPlugin({
            stylableConfig(config) {
                return {
                    ...config,
                    resolveNamespace: noCollisionNamespace(),
                };
            },
        }),
        new HtmlWebpackPlugin({ title: 'Stylable App' }),
    ],
    cache: { type: 'filesystem' },
};
