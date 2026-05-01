import * as fs from 'fs';
import * as path from 'path';

// We must dynamically import the compiled meta files using TSX, but since this script is executed via TSX, we can just import them normally.
import * as storiesMetaMap from '../src/content/stories/meta';
import * as deitiesMetaMap from '../src/content/deities/meta';
import * as locationsMetaMap from '../src/content/locations/meta';

const STORIES_DIR = path.join(process.cwd(), 'src/content/stories');
const DEITIES_DIR = path.join(process.cwd(), 'src/content/deities');
const LOCATIONS_DIR = path.join(process.cwd(), 'src/content/locations');

// Stories
function generateStoriesIndex() {
  const metaKeys = Object.keys(storiesMetaMap);
  let out = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Run 'npm run generate' to update.

import * as React from "react";
import dynamic from "next/dynamic";
import type { StoryEntry } from "@/types/content";
import * as meta from "./meta";

(React as unknown as { default?: typeof React }).default ??= React;

export const storyBySlug: Record<string, StoryEntry> = {
`;

  for (const key of metaKeys) {
    const metaObj = (storiesMetaMap as Record<string, { slug?: string }>)[key];
    if (metaObj && metaObj.slug) {
      const slug = metaObj.slug;
      const enExists = fs.existsSync(path.join(STORIES_DIR, 'en', slug + '.mdx'));
      const ltExists = fs.existsSync(path.join(STORIES_DIR, 'lt', slug + '.mdx'));
      const lvExists = fs.existsSync(path.join(STORIES_DIR, 'lv', slug + '.mdx'));

      const enImport = enExists ? `dynamic(() => import("./en/${slug}.mdx"))` : '() => null';
      const ltImport = ltExists ? `dynamic(() => import("./lt/${slug}.mdx"))` : enImport;
      const lvImport = lvExists ? `dynamic(() => import("./lv/${slug}.mdx"))` : enImport;

      out += `  "${slug}": {
    meta: meta.${key},
    Content: ${enImport},
    contentByLang: {
      en: ${enImport},
      lt: ${ltImport},
      lv: ${lvImport},
    }
  },\n`;
    }
  }

  out += `};

export const stories: StoryEntry[] = Object.values(storyBySlug);
`;

  const outPath = path.join(STORIES_DIR, 'index.ts');
  fs.writeFileSync(outPath, out, 'utf-8');
  console.log(`✓ Generated ${outPath}`);
}

// Locations
function generateLocationsIndex() {
  const metaKeys = Object.keys(locationsMetaMap);
  let out = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Run 'npm run generate' to update.

import * as React from "react";
import dynamic from "next/dynamic";
import type { Language, LocationEntry, LocationMeta, LocationPoint } from "@/types/content";
import * as meta from "./meta";

(React as unknown as { default?: typeof React }).default ??= React;

export const locationEntryById: Record<string, LocationEntry> = {
`;

  for (const key of metaKeys) {
    const metaObj = (locationsMetaMap as Record<string, { id?: string }>)[key];
    if (metaObj && metaObj.id) {
      const id = metaObj.id;
      const enExists = fs.existsSync(path.join(LOCATIONS_DIR, 'en', id + '.mdx'));
      const ltExists = fs.existsSync(path.join(LOCATIONS_DIR, 'lt', id + '.mdx'));
      const lvExists = fs.existsSync(path.join(LOCATIONS_DIR, 'lv', id + '.mdx'));

      const enImport = enExists ? `dynamic(() => import("./en/${id}.mdx"))` : '() => null';
      const ltImport = ltExists ? `dynamic(() => import("./lt/${id}.mdx"))` : enImport;
      const lvImport = lvExists ? `dynamic(() => import("./lv/${id}.mdx"))` : enImport;

      out += `  "${id}": {
    meta: meta.${key},
    Content: ${enImport},
    contentByLang: {
      en: ${enImport},
      lt: ${ltImport},
      lv: ${lvImport},
    }
  },\n`;
    }
  }

  out += `};

export const locationEntries: LocationEntry[] = Object.values(locationEntryById);
export const locationMetas: LocationMeta[] = locationEntries.map((entry) => entry.meta);
export const locationById: Record<string, LocationMeta> = Object.fromEntries(
  locationEntries.map((entry) => [entry.meta.id, entry.meta])
);

export function toLocationPoint(metaInfo: LocationMeta, language: Language, fallback?: LocationPoint): LocationPoint {
  return {
    id: metaInfo.id,
    name: metaInfo.name[language] ?? fallback?.name ?? metaInfo.name.en,
    coordinates: metaInfo.coordinates,
    region: metaInfo.region,
    description: metaInfo.description[language] ?? fallback?.description ?? metaInfo.description.en,
    siteType: metaInfo.siteType,
    aura: metaInfo.aura,
    deity: metaInfo.deity,
    significance: metaInfo.significance[language] ?? fallback?.significance ?? metaInfo.significance.en,
  };
}

export function getLocationPoints(language: Language = "en") {
  return locationEntries.map((entry) => toLocationPoint(entry.meta, language));
}

export function findLocationPoint(
  id: string,
  language: Language = "en",
  fallback?: LocationPoint,
) {
  const metaInfo = locationById[id];
  if (!metaInfo) return fallback;
  return toLocationPoint(metaInfo, language, fallback);
}

export function getLocationsForDeity(deitySlug: string, language: Language = "en") {
  return locationEntries
    .filter((entry) => entry.meta.deity === deitySlug)
    .map((entry) => toLocationPoint(entry.meta, language));
}
`;

  const outPath = path.join(LOCATIONS_DIR, 'index.ts');
  fs.writeFileSync(outPath, out, 'utf-8');
  console.log(`✓ Generated ${outPath}`);
}

// Deities
function generateDeitiesIndex() {
  const metaKeys = Object.keys(deitiesMetaMap);
  let out = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Run 'npm run generate' to update.

import * as React from "react";
import dynamic from "next/dynamic";
import type { DeityEntry } from "@/types/content";
import * as meta from "./meta";

(React as unknown as { default?: typeof React }).default ??= React;

export const deityBySlug: Record<string, DeityEntry> = {
`;

  const categories = ['gods', 'creatures', 'people'];

  for (const key of metaKeys) {
    const metaObj = (deitiesMetaMap as Record<string, { slug?: string }>)[key];
    if (metaObj && metaObj.slug) {
      const slug = metaObj.slug;
      
      // Find which directory it lives in by checking for en, lt, or lv
      let foundCategory = categories[0];
      let catFound = false;
      for (const cat of categories) {
        if (
          fs.existsSync(path.join(DEITIES_DIR, cat, 'en', slug + '.mdx')) ||
          fs.existsSync(path.join(DEITIES_DIR, cat, 'lt', slug + '.mdx')) ||
          fs.existsSync(path.join(DEITIES_DIR, cat, 'lv', slug + '.mdx'))
        ) {
          foundCategory = cat;
          catFound = true;
          break;
        }
      }

      if (!catFound) {
        // Safe default if no files exist at all
        foundCategory = 'gods';
      }

      const enExists = fs.existsSync(path.join(DEITIES_DIR, foundCategory, 'en', slug + '.mdx'));
      const ltExists = fs.existsSync(path.join(DEITIES_DIR, foundCategory, 'lt', slug + '.mdx'));
      const lvExists = fs.existsSync(path.join(DEITIES_DIR, foundCategory, 'lv', slug + '.mdx'));

      const enImport = enExists ? `dynamic(() => import("./${foundCategory}/en/${slug}.mdx"))` : '() => null';
      const ltImport = ltExists ? `dynamic(() => import("./${foundCategory}/lt/${slug}.mdx"))` : enImport;
      const lvImport = lvExists ? `dynamic(() => import("./${foundCategory}/lv/${slug}.mdx"))` : enImport;

      out += `  "${slug}": {
    meta: meta.${key},
    Content: ${enImport},
    contentByLang: {
      en: ${enImport},
      lt: ${ltImport},
      lv: ${lvImport},
    }
  },\n`;
    }
  }

  out += `};

export const deities: DeityEntry[] = Object.values(deityBySlug);
`;

  const outPath = path.join(DEITIES_DIR, 'index.ts');
  fs.writeFileSync(outPath, out, 'utf-8');
  console.log(`✓ Generated ${outPath}`);
}

function run() {
  console.log("Generating content indexes...");
  generateStoriesIndex();
  generateLocationsIndex();
  generateDeitiesIndex();
  console.log("Done!");
}

run();
