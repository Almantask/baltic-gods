declare module "*.mdx" {
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export const meta: import("./src/types/content").DeityMeta;
  export default MDXComponent;
}
