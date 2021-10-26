import { system } from "@theme-ui/presets";
import { merge } from "theme-ui";
import prismPreset from "@theme-ui/prism/presets/night-owl.json";

import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

const theme = merge(system, {
  fonts: { body: "Space Grotesk", heading: "Space Grotesk", monospace: "monospace" },
  fontSizes: [16, 20, 24, 32, 40, 48, 64],
  fontWeights: {
    body: 500,
    heading: 700,
    bold: 700,
  },
  colors: {},
  sizes: { container: 1366 },
  layout: {
    container: {
      maxWidth: "container",
      mx: "auto",
      px: 3,
    },
    footer: {
      py: 4,
    },
  },
  cards: {
    primary: {
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      p: 3,
      maxWidth: 480,
      mx: "auto",
    },
  },
  forms: { fontFamily: "body", label: { fontWeight: "bold" }, input: { mb: 3 }, textarea: { mb: 3 } },
  styles: {
    li: {
      fontSize: 2,
    },
    p: {
      fontSize: 2,
    },
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
      mx: "auto",
      ...prismPreset,
      borderRadius: 4,
    },
  },
});

export default theme;
