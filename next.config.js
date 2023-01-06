module.exports = {
  reactStrictMode: true,
  module: {
<<<<<<< HEAD
    test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
    loader: "url-loader?limit=100000",
=======
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader",
>>>>>>> 5260bc70386a8a3eefca8d673de113978e289d3b
  },
  images: {
    domains: ["files.cdn.printful.com"],
  },
};
