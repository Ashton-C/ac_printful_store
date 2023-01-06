module.exports = {
  reactStrictMode: true,
  module: {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader",
  },
  images: {
    domains: ["files.cdn.printful.com"],
  },
};
