// Manual check of what's exported
const deities = [
  { meta: { slug: "perkunas", name: "Perkūnas" } },
  { meta: { slug: "saule", name: "Saulė" } },
];

const deityBySlug = Object.fromEntries(
  deities.map((entry) => [entry.meta.slug, entry]),
);

console.log("deityBySlug:", deityBySlug);
console.log("deityBySlug['perkunas']:", deityBySlug["perkunas"]);
console.log("Keys:", Object.keys(deityBySlug));
