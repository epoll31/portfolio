/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/ocd',
        destination: 'https://ocd-tracker-web-app.vercel.app',
      },
    ]
  },
};

export default nextConfig;
