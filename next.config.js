/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa")({
//    pwa: {
//     dest: 'public',
//     disable: process.env.NODE_ENV === 'development',
//     register: true,
//     skipWaiting: true,
//   },
// })
// module.exports = withPWA({
//   // next.js config
// })

const nextConfig = { 
  images: {
    domains: ['res.cloudinary.com'], // Specify the domains for images
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    MESSENGER_ID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    NEWS_KEY: process.env.NEXT_PUBLIC_NEWS_KEY
  },
};

module.exports = nextConfig;