const withTM = require("next-transpile-modules")(["@mfezones/ui"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/admin",
};

module.exports = withTM(nextConfig);
