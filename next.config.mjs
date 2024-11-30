/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    // Fix for warnings about cjs/esm package duplication
    // See: https://github.com/polkadot-js/api/issues/5636
    '@polkadot',
  ],
}

export default nextConfig
