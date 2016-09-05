module.exports = {
  entry: {
    app: "./app/javascript/"
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.css'],
        modulesDirectories: [
            './node_modules',
            './app'
        ]
    },
};
