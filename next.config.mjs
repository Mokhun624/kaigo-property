/** @type {import('next').NextConfig} */
// import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log('__dirname', __dirname);
const nextConfig = {
  // sassOptions: {
  //   // includePaths: [path.join(__dirname, 'src/styles')],
  //   includePaths: [path.join(__dirname, 'src/styles')],
  //   prependData: `
  //   @use "mixin.scss" as *;
  //   `,
  // },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
