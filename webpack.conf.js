const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

let config = {
    mode: 'production',
    watch: true,
    module: {
        rules: [
          {
            test: /\.ts$/i,
            use: 'ts-loader',
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
            { 
                from: 'src/*.json', 
                to: '',
                flatten: true
            }
            ]
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
}
let bg = {
    name: "background",
    entry: "./src/background.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "background.js"
    },
};

let main = {
    name: "main",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
}

module.exports = [
    Object.assign({}, config, main),
    Object.assign({}, config, bg)
]