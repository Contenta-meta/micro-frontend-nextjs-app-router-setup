const getUrl = (appName: string, defaultPort: number) => {
  const port = process.env[`${appName.toUpperCase()}_PORT`] || defaultPort;
  return `http://localhost:${port}`;
};
const ADMIN_URL = getUrl("admin", 3001);
const USER_URL = getUrl("user", 3002);
const GUEST_URL = getUrl("guest", 3003);

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
