const withVideos = require('next-videos');

const nextConfig = {
  webpack: (config, options) => {
    if (options.isServer) {
      require('./lib/rss');
    }

    return config;
  },
};

module.exports = withVideos(nextConfig);
