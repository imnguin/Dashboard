const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
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
                test: /\.(gif|png|jpe?g|svg)$/i, // Xử lý các file GIF, PNG, JPG, SVG
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Giữ nguyên tên file
                            outputPath: 'assets/', // Đầu ra trong thư mục dist/assets/
                        },
                    },
                ],
            },
            {
                test: /\.css$/, // Xử lý các file CSS
                use: [
                    'style-loader', // Inject CSS vào DOM
                    'css-loader',   // Đọc và xử lý file CSS
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8089,
        historyApiFallback: true,
        host: 'dev.dashboard.vn'
    },
    mode: 'development'
};