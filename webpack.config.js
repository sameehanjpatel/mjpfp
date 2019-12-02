module.exports = {
    entry : "./server/app.js",
    // output: {
    //     filename: 'app.js',
    //     path: path.join(__dirname, "assets")
    // },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader"
            }
        ]
    }
}