const fs = require('fs');
const path = require('path');

try {
  const uploadedImg = 'C:\\\\Users\\\\SONA\\\\.gemini\\\\antigravity-ide\\\\brain\\\\de98b61c-343e-4bf3-af01-122ccffd1209\\\\.user_uploaded\\\\media_1791178672574.png';
  const targetImg = path.join(__dirname, 'public', 'credtree-wordmark.png');
  if (fs.existsSync(uploadedImg)) {
    fs.copyFileSync(uploadedImg, targetImg);
  }
} catch (e) {
  console.error('Copy wordmark failed:', e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
