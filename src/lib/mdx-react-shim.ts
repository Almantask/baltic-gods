import * as React from "react";

type MDXComponents = Record<string, React.ComponentType<any>>;

const emptyComponents: MDXComponents = {};

const MDXContext = React.createContext<MDXComponents>(emptyComponents);

export function useMDXComponents(
  components?: MDXComponents | ((current: MDXComponents) => MDXComponents),
) {
  const contextComponents = React.useContext(MDXContext);

  return React.useMemo(() => {
    if (typeof components === "function") {
      return components(contextComponents);
    }
    return { ...contextComponents, ...components };
  }, [components, contextComponents]);
}

export function MDXProvider({
  components,
  disableParentContext,
  children,
}: {
  components?: MDXComponents | ((current: MDXComponents) => MDXComponents);
  disableParentContext?: boolean;
  children?: React.ReactNode;
}) {
  const allComponents = disableParentContext
    ? typeof components === "function"
      ? components(emptyComponents)
      : components || emptyComponents
    : useMDXComponents(components);

  return (
    <MDXContext.Provider value={allComponents}>{children}</MDXContext.Provider>
  );
}

export default MDXProvider;
