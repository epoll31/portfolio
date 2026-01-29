/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/ocd',
        destination: 'https://ocd-tracker-web-g0jtswrc9-epoll31s-projects.vercel.app',
      },
    ]
  },
};

export default nextConfig;
