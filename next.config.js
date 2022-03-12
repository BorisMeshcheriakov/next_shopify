const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
	reactStrictMode: true,
	framework: {
		name: process.env.NEXT_PUBLIC_FRAMEWORK,
	},
	i18n: {
		locales: ['en-US', 'es'],
		defaultLocale: 'en-US',
	},
});

console.log('config', JSON.stringify(module.exports, null, 2));
