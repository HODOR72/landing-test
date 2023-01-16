/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_SERVER_URL: process.env.APP_SERVER_URL,
	},
}

module.exports = nextConfig
