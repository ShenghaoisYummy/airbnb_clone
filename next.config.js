/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // The protocol of the URL
        hostname: "img.clerk.com", // The hostname from the error
        port: "", // Leave empty unless a specific port is used
        pathname: "/**", // Allows all paths under this hostname (use specific paths if needed)
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
