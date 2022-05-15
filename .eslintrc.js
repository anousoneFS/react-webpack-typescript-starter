module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:eslint-comments/recommended',
    ],
    rules: {
        'no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'warn',
        'react/prop-types': 'warn',
        'react/jsx-uses-react': 'warn',
        'react/react-in-jsx-scope': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
}
