import * as React from "react";
import type { DeityEntry, LocationPoint } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations.
(React as unknown as { default?: typeof React }).default ??= React;

import AustejaContent from "./en/austeja.mdx";
import BangputysContent from "./en/bangputys.mdx";
import DievasContent from "./en/dievas.mdx";
import GabijaContent from "./en/gabija.mdx";
import LaimaContent from "./en/laima.mdx";
import MedineContent from "./en/medine.mdx";
import MenulisContent from "./en/menulis.mdx";
import PerkunasContent from "./en/perkunas.mdx";
import SauleContent from "./en/saule.mdx";
import VelniasContent from "./en/velnias.mdx";
import ZemynaContent from "./en/zemyna.mdx";
import {
  austejaMeta,
  bangputysMeta,
  dievasMeta,
  gabijaMeta,
  laimaMeta,
  medineMeta,
  menulisMeta,
  perkunasMeta,
  sauleMeta,
  velniasMeta,
  zemynaMeta,
} from "./meta";

export const deities: DeityEntry[] = [
  { meta: perkunasMeta, Content: PerkunasContent },
  { meta: zemynaMeta, Content: ZemynaContent },
  { meta: sauleMeta, Content: SauleContent },
  { meta: laimaMeta, Content: LaimaContent },
  { meta: velniasMeta, Content: VelniasContent },
  { meta: austejaMeta, Content: AustejaContent },
  { meta: menulisMeta, Content: MenulisContent },
  { meta: dievasMeta, Content: DievasContent },
  { meta: gabijaMeta, Content: GabijaContent },
  { meta: bangputysMeta, Content: BangputysContent },
  { meta: medineMeta, Content: MedineContent },
];

export const deityBySlug = Object.fromEntries(
  deities.map((entry) => [entry.meta.slug, entry]),
) as Record<string, DeityEntry>;

export const allLocations: LocationPoint[] = deities.flatMap(
  (entry) => entry.meta.locations,
);

export function findLocationById(id: string) {
  return allLocations.find((location) => location.id === id);
}
