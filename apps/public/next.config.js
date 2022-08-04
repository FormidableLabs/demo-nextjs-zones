const withTM = require("next-transpile-modules")(["@mfezones/ui"]);
const { CLIENT_URL, ADMIN_URL, PUBLIC_URL, NEXT_PUBLIC_VERCEL_URL, ENV } =
  process.env;

const baseUrl =
  ENV === "local" ? PUBLIC_URL : "https://" + NEXT_PUBLIC_VERCEL_URL;

/** @type {import('next').NextConfig}  */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    basePaths: {
      public: baseUrl,
    },
  },

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
