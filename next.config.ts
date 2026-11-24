import type { NextConfig } from 'next';

// Kept empty on purpose: on deploy, the configure-pages step in
// .github/workflows/nextjs.yml (static_site_generator: next) edits this file
// to add the GitHub Pages basePath and turn off image optimisation.
// See also src/lib/public-path.ts.
const nextConfig: NextConfig = {};

export default nextConfig;
