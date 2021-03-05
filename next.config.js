const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

const nextConfig = {
  webpack: (config, options) => {
    if (options.isServer) {
      require('./lib/rss');
    }

    return config;
  },
};

module.exports = withPlugins([withVideos], nextConfig);
