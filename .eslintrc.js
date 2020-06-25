module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint'
	],
	env: {
		browser: true,
		node: true
	},
	rules: {
		'no-mixed-spaces-and-tabs': 'off',
		'no-empty': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-fallthrough': 'off'
	},
	globals: {
		"createPoint": true,
		"afterEach": true,
		"SynchronousPromise": true,
		"mocha": true,
		"chai": true,
		"Promise": true,
		"defaultPermissions": true,
		"getOpenedPopup": true,
		"getOpenedDialog": true,
		"getBox": true,
		"offset": true,
		"i18nkeys": true,
		"appendTestDiv": true,
		"getButton": true,
		"clickTrigger": true,
		"clickButton": true,
		"sortAttributes": true,
		"onLoadImage": true,
		"sortStyles": true,
		"simulateEvent": true,
		"beforeEach": true,
		"describe": true,
		"it": true,
		"getJodit": true,
		"Jodit": true,
		"expect": true,
		"unmockPromise": true,
		"appendTestArea": true,
		"mockPromise": true,
		"fillBoxBr": true,
		"selectCells": true,
		"before": true,
		"after": true,
		"FileImage": true,
		"FileXLS": true,
	}
};
