module.exports = {
    entry: './src/index.js', //入口
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader"
        }]
    },
    plugins: [
           //热更新插件

    ],
}