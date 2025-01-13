const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/miles-thomas.com/' : '',
  basePath: isProd ? '/miles-thomas.com' : '',
  output: 'export'
};

export default nextConfig;