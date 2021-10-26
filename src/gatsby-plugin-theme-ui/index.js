import { system } from "@theme-ui/presets";
import { merge } from "theme-ui";
import prismPreset from "@theme-ui/prism/presets/prism-coy.json";

import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

const theme = merge(system, {
  fonts: { body: "Space Grotesk", heading: "Space Grotesk", monospace: "monospace" },
  fontWeights: {
    body: 500,
    heading: 700,
    bold: 700,
  },
  colors: {},
  sizes: { container: 480 },
  layout: {
    container: {
      maxWidth: "container",
      mx: "auto",
      px: 3,
    },
    footer: {
      py: 4,
      textAlign: "center",
    },
  },
  forms: { fontFamily: "body", label: { fontWeight: "bold" }, input: { mb: 3 }, textarea: { mb: 3 } },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      border: (theme) => `solid 1px ${theme.colors.primary}`,
      cursor: "pointer",
      ":hover": {
        color: "primary",
        bg: "background",
      },
    },
  },
  styles: {
    a: {
      fontWeight: "bold",
      textDecoration: "none",
      "&:hover": {
        color: "yellow",
      },
    },
    h1: { mb: 0 },
    h2: { mb: 0 },
    code: {
      ...prismPreset,
    },
  },
});

export default theme;
