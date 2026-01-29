/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/ocd',
        destination: 'https://ocd-tracker-web-app.vercel.app',
      },
      {
        source: '/ocd/:path*',
        destination: 'https://ocd-tracker-web-app.vercel.app/:path*',
      },
    ]
  },
};

export default nextConfig;
