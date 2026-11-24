// GitHub Pages serves the site under /Portfolio (the deploy workflow injects
// basePath into next.config at build time). Next adds it to its own links and
// images, but not to a plain <a href> pointing at a file in /public.
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

/** The URL of a file in /public, with the GitHub Pages base path in production. */
export const publicPath = (path: string) => `${BASE_PATH}/${path}`;
