import { deities, deityBySlug } from "@/content/deities";

// Check what's being returned
console.log("Static params:", deities.map((entry) => ({ slug: entry.meta.slug })));
console.log("deityBySlug keys:", Object.keys(deityBySlug));
console.log("Checking deityBySlug['perkunas']:", deityBySlug['perkunas']);
