import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'assets.aceternity.com',
      'www.gta-multiplayer.cz',
      'images.squarespace-cdn.com',
      'fiverr-res.cloudinary.com',
      's3-gallery.int-cdn.lcpdfrusercontent.com',
      'mir-s3-cdn-cf.behance.net', // Add this domain
    ],
  },
  /* Other config options can go here */
};

export default nextConfig;
