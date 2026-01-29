/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: "/ocd/:path*",
        destination:
          "https://ocd-tracker-web-g0jtswrc9-epoll31s-projects.vercel.app/:path*",
      },
    ];
  },

};

export default nextConfig;
