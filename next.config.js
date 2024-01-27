/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/services/digital-transformation',
                permanent: true,
            },
            
        ]
    },
}

module.exports = nextConfig
