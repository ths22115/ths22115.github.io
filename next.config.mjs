const isProd = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: !isProd ? '',
  // basePath: !isProd ? ''
  // output: 'export'
};

export default nextConfig;