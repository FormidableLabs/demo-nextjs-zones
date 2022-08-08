const withTM = require("next-transpile-modules")(["@mfezones/ui"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/app",
};

module.exports = withTM(nextConfig);
