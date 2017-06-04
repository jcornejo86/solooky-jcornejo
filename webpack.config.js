module.exports = {
  entry: "./src/entry.jsx",
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: "url-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: [
            'react-hot-loader',
            'babel-loader?presets[]=latest,presets[]=react',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader']
      },
      {
        test: /\.html$/,
        loaders: ['file-loader?name=[name].[ext]']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 8181
  },
};
