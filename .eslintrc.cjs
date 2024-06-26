module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'react-hooks'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'react-hooks/exhaustive-deps': 'off', // <--- THIS IS THE NEW RULE
		'@typescript-eslint/no-unused-vars': 'off',
		// 't@typescript-eslint/no-explicit-any': 'off'
	},
};
