import { system } from "@theme-ui/presets";
import { merge } from "theme-ui";
import prismPreset from "@theme-ui/prism/presets/night-owl.json";

import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

const theme = merge(system, {
  fonts: { body: "Space Grotesk", heading: "Space Grotesk", monospace: "monospace" },
  sizes: { container: 768 },
  fontSizes: [14, 16, 20, 24, 32, 48, 64, 96, 128],

  fontWeights: {
    body: 500,
    heading: 700,
    bold: 700,
  },
  colors: {
    // background: "#bbb",
    // primary: "#ff79c6",
    // // background: "##f0f5fa",
    // text: "#222639",
  },
  styles: {
    a: {
      textDecoration: "none",
      "&:hover": {
        color: "yellow",
      },
    },
    iframe: { borderRadius: 4 },
    form: { fontFamily: "body", label: { fontWeight: "bold" }, input: { mb: 3 }, textarea: { mb: 3 } },
    code: {
      ...prismPreset,
      p: 1,
      borderRadius: 4,
    },
    pre: {
      ...prismPreset,
    },
  },
});

export default theme;
