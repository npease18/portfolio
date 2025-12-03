/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/previous_versions/legacy',
          destination: '/previous_versions/legacy/index.html',
        },
      ]
    },
  }
 
export default nextConfig