module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react'],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'always',
                types: 'always',
                lib: 'always',
            },
        ],
        '@typescript-eslint/no-floating-promises': 0
    },
};
