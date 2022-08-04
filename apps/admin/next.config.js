const withTM = require("next-transpile-modules")(["@mfezones/ui"]);
const { CLIENT_URL, ADMIN_URL, PUBLIC_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/admin",
  publicRuntimeConfig: {
    basePaths: {
      public: PUBLIC_URL,
    },
  },
};

module.exports = withTM(nextConfig);
