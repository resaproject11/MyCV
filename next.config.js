/** @type {import('next').NextConfig} */
const path = require("path");
const withImages = require("next-images");
const withCSS = require;

module.exports = {
  reactStrictMode: true,
  sassOption: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
