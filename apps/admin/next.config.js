const withTM = require("next-transpile-modules")(["@mfezones/ui"]);
const { CLIENT_URL, ADMIN_URL, PUBLIC_URL, NEXT_PUBLIC_VERCEL_URL, ENV } =
  process.env;
const baseUrl = ENV === "local" ? PUBLIC_URL : NEXT_PUBLIC_VERCEL_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/admin",
  publicRuntimeConfig: {
    basePaths: {
      public: baseUrl,
    },
  },
};

module.exports = withTM(nextConfig);
