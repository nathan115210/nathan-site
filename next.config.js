require("dotenv").config();

module.exports = {
  env: {
    SITE_URL: process.env.SITE_URL,
    SITE_AUTHOR: process.env.SITE_AUTHOR,
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
