// GitHub Pages serves the site under /Portfolio (basePath is injected at deploy
// time). Plain <a href> links to files in /public don't get it automatically.
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

export const publicFile = (path: string) => `${BASE_PATH}/${path}`;
