import type { Config } from 'tailwindcss';

// Dark theme with one light-purple accent ("lilac"). Every colour on the site
// is one of these tokens, so new components should reach for a token, not a
// raw hex.
export default {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                base: '#0D0C12',
                surface: {
                    DEFAULT: '#15141C',
                    // Terminals, nested panels and chips inside a card.
                    raised: '#1D1B27',
                },
                edge: '#2A2738',
                fg: '#EEEDF4',
                // Secondary text: 7:1 on surface, so it stays readable.
                muted: '#A6A2B8',
                lilac: {
                    DEFAULT: '#C9B8FF',
                    light: '#DDD2FF',
                },
            },
            fontFamily: {
                sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
            },
            maxWidth: {
                page: '72rem',
            },
        },
    },
    plugins: [],
} satisfies Config;
