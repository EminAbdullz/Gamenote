/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		BASE_URL: process.env.BASE_URL,
		PRODUCTS_URL: process.env.PRODUCTS_URL,
		PRODUCTS_TITLE_URL: process.env.PRODUCTS_TITLE_URL,
		BRANDS_URL: process.env.BRANDS_URL,
		COUNTRIES_URL: process.env.COUNTRIES_URL,
		RAMS_URL: process.env.RAMS_URL,
		LOGIN_URL: process.env.LOGIN_URL,
		REGISTER_URL: process.env.REGISTER_URL,
		COUNTRIES_LIST_URL: process.env.COUNTRIES_LIST_URL,
		MAP_API_KEY: process.env.MAP_API_KEY,
		USER_ORDER_URL: process.env.USER_ORDER_URL,
		ALL_USERS_URL: process.env.ALL_USERS_URL,
		ORDER_LIST_URL: process.env.ORDER_LIST_URL,
	},
};

module.exports = nextConfig;
