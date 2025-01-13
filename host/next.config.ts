const ADMIN_URL = "http://localhost:3001";
const USER_URL = "http://localhost:3002";
const GUEST_URL = "http://localhost:3003";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: `${ADMIN_URL}/admin`,
      },
      {
        source: "/admin-static/_next/:path*",
        destination: `${ADMIN_URL}/_next/:path*`,
      },
      {
        source: "/user",
        destination: `${USER_URL}/user`,
      },
      {
        source: "/user-static/_next/:path*",
        destination: `${USER_URL}/_next/:path*`,
      },
      {
        source: "/guest",
        destination: `${GUEST_URL}/guest`,
      },
      {
        source: "/guest-static/_next/:path*",
        destination: `${GUEST_URL}/_next/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
