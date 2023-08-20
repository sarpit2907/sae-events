/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};


module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'encrypted-tbn0.gstatic.com','www.sae.org','financialexpresswpcontent.s3.amazonaws.com'
               ,'www.racecar-engineering.com','cf-images.us-east-1.prod.boltdns.net','s3.amazonaws.com','eng.vt.edu'],
  },
};

