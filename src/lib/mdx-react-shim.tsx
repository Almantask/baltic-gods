"use client";

import {
  ComponentType,
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";

type MDXComponents = Record<string, ComponentType<unknown>>;

const emptyComponents: MDXComponents = {};

const MDXContext = createContext<MDXComponents>(emptyComponents);

export function useMDXComponents(
  components?: MDXComponents | ((current: MDXComponents) => MDXComponents),
) {
  const contextComponents = useContext(MDXContext);

  return useMemo(() => {
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
  children?: ReactNode;
}) {
  const mergedComponents = useMDXComponents(components);

  const allComponents = disableParentContext
    ? typeof components === "function"
      ? components(emptyComponents)
      : components || emptyComponents
    : mergedComponents;

  return (
    <MDXContext.Provider value={allComponents}>{children}</MDXContext.Provider>
  );
}

export default MDXProvider;
