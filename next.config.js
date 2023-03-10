/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "hips.hearstapps.com",
      "cdn.britannica.com",
    ],
  },
};

module.exports = nextConfig;
