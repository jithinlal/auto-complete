module.exports = {
	setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy',
	},
	testEnvironment: 'jsdom',
};
