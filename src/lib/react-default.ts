import * as React from "react";

// Ensure packages expecting a default React export can access core APIs.
(React as unknown as { default?: typeof React }).default ??= React;
