import type { DeityMeta } from "./content";

declare module "*.mdx" {
  export const meta: DeityMeta;
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}
