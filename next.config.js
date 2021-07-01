const withVideos = require('next-videos');
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  webpack: (config, options) => {
    if (options.isServer) {
      require('./lib/rss');
    }

    return config;
  },

  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/peduarte',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/peduarte',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer()(withVideos(nextConfig));
