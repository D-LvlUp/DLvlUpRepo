/** @type {import('ts-jest').JestConfigWithTsJest} */
const sharedConfig = require('../../jest.config');
module.exports = {
	...sharedConfig,
	coveragePathIgnorePatterns: ['MailOptions.ts','app.ts']
};
