const isProd = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  allowedDevOrigins: ['10.0.0.228', '*.10.0.0.228'],
  // assetPrefix: !isProd ? '',
  // basePath: !isProd ? ''
  // output: 'export'
};

export default nextConfig;