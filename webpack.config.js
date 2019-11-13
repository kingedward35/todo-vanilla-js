module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

// module.exports = {
//   mode: 'development',
//   entry: 'src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index.bundle.js'
//   },
//   rules: [
//     {
//       test: /\.m?js$/,
//       exclude: /(node_modules|bower_components)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     }
//   ]
// }
