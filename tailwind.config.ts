import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E9C3FF',
                secundary: '#36223B',
                accent: '#D9D8FF',
                nonPrimaryText: '#A6A6A6',
            },
            borderRadius: {
                default: '12px',
            },
        },
    },
    plugins: [],
} satisfies Config;
