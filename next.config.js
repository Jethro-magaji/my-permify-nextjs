const nextConfig = {
  reactStrictMode: true,
  // ... other settings

  // Add CORS configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Note: This is important!
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }, // Allow all origins
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' }, // Allow GET and OPTIONS methods
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' }, 
        ],
      },
    ];
  },
};

module.exports = nextConfig;