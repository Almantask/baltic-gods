import * as React from "react";

// Ensure packages expecting a default React export can access core APIs.
(React as unknown as { default?: typeof React }).default ??= React;

export const createContext = React.createContext;
export const useContext = React.useContext;
export const useMemo = React.useMemo;
export const useState = React.useState;
export const useEffect = React.useEffect;
export const useRef = React.useRef;
export const useCallback = React.useCallback;

export { React };
export default React;
