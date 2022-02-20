module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  },
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://hugofusinato.com/' },
      { source: '/jekyll/', destination: 'https://hugofusinato.com/' },
      { source: '/svg/', destination: 'https://hugofusinato.com/' },
      { source: '/dev/', destination: 'https://hugofusinato.com/' },
      { source: '/tags/', destination: 'https://hugofusinato.com/' },
      { source: '/page/:slug*', destination: 'https://hugofusinato.com/' }
    ]
  },
  async redirects() {
    return []
  },
  images: { domains: ['i.imgur.com'] }
}