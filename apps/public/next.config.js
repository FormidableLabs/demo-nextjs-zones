const withTM = require("next-transpile-modules")(["@mfezones/ui"]);
const { CLIENT_URL, ADMIN_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: "/app",
        destination: `${CLIENT_URL}/app`,
      },
      {
        source: "/app/:path*",
        destination: `${CLIENT_URL}/app/:path*`,
      },
      {
        source: "/admin",
        destination: `${ADMIN_URL}/admin`,
      },
      {
        source: "/admin/:path*",
        destination: `${ADMIN_URL}/admin/:path*`,
      },
      {
        source: "/:path*",
        destination: `/:path*`,
      },
    ];
  },
};

module.exports = withTM(nextConfig);
