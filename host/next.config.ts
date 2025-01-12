/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "http://localhost:3001/admin",
      },
      {
        source: "/user",
        destination: "http://localhost:3002/user",
      },
      {
        source: "/guest",
        destination: "http://localhost:3003/guest",
      },
    ];
  },
};

module.exports = nextConfig;

