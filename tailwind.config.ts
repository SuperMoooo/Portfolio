import type { Config } from 'tailwindcss';

/** Reads a colour token from globals.css so Tailwind's opacity modifiers (`bg-accent/10`) still work. */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

// Violet-black page, pastel purple accent. Values and their roles live in
// globals.css; components only ever use these names, never a raw hex.
export default {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                canvas: token('canvas'),
                surface: {
                    DEFAULT: token('surface'),
                    raised: token('surface-raised'),
                },
                line: token('line'),
                ink: {
                    DEFAULT: token('ink'),
                    muted: token('ink-muted'),
                },
                accent: {
                    DEFAULT: token('accent'),
                    hover: token('accent-hover'),
                    // Text on an accent fill.
                    ink: token('accent-ink'),
                },
            },
            fontFamily: {
                sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
            },
            // The type scale. Body text uses Tailwind's base/sm/xs.
            fontSize: {
                // The hero headline, with the full page width to itself.
                display: ['clamp(2.5rem, 1.4rem + 4.4vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '700' }],
                title: ['clamp(1.75rem, 1.45rem + 1.1vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                heading: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
                lead: ['1.125rem', { lineHeight: '1.65' }],
                // Terminal lines: mono runs wide, so it sits a step under body text.
                code: ['0.8125rem', { lineHeight: '1.7' }],
            },
            // Each kind of surface gets its own radius: tags < buttons < tiles < the contact band.
            borderRadius: {
                tag: '6px',
                control: '10px',
                card: '20px',
                panel: '28px',
            },
            maxWidth: {
                page: '72rem',
            },
        },
    },
    plugins: [],
} satisfies Config;
