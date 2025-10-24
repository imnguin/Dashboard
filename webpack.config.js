const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// 1. Đọc biến môi trường
const NODE_ENV = process.env.NODE_ENV || 'development';
const APP_ENV = process.env.APP_ENV || 'dev';

// 2. Xác định tên file cấu hình động
const CONFIG_FILE_NAME = `systemVar${APP_ENV.charAt(0).toUpperCase() + APP_ENV.slice(1)}`;

module.exports = {
    // Thiết lập Webpack mode
    mode: NODE_ENV,

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
    },

    // ⭐️ Cấu hình Alias động
    resolve: {
        alias: {
            // Khi import '@system-vars', Webpack sẽ trỏ đến file tương ứng
            '@system-vars': path.resolve(__dirname, `src/constants/${CONFIG_FILE_NAME}.js`),
        },
        extensions: ['.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // Định nghĩa biến môi trường cho mã nguồn (tùy chọn)
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.APP_ENV': JSON.stringify(APP_ENV),
        }),
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8089,
        historyApiFallback: true,
        // host: 'dev.dashboard.vn'
    },
};