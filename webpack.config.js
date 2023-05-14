const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        loadPage: './src/page-load.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            // format index.html to readable code using prettier
            // This function takes an object that contains the options 
            // passed to HtmlWebpackPlugin, and it returns the formatted HTML code.
            templateContent: ({ htmlWebpackPlugin }) => {
                const { html } = htmlWebpackPlugin.options;
                // check to see if htmlWebpackPlugin.options.html is
                // defined before attempting to format it with Prettier
                return html?prettier.format(html, { parser: 'html'}): '';
            },
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    }
}