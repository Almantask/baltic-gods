// Debug: Check what generateStaticParams returns
import { deities } from './src/content/deities/index';

console.log("Deities count:", deities.length);
console.log("Deities slugs:", deities.map(d => d.meta.slug));

const params = deities.map((entry) => ({ slug: entry.meta.slug }));
console.log("Generated params:", params);
