import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: { body: "Space Grotesk", heading: "Space Grotesk", monospace: "monospace" },
  fontSizes: [14, 16, 20, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  sizes: { container: 1366 },
  buttons: {
    primary: {
      border: (theme) => `1px solid ${theme.colors.primary}`,
      borderRadius: 4,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "background",
        color: "primary",
      },
    },
  },
  styles: {
    root: { fontFamily: "body", lineHeight: "body", fontWeight: "body" },
    h1: { variant: "text.heading", fontSize: 5 },
    h2: { variant: "text.heading", fontSize: 4 },
    h3: { variant: "text.heading", fontSize: 3 },
    h4: { variant: "text.heading", fontSize: 2 },
    h5: { variant: "text.heading", fontSize: 1 },
    h6: { variant: "text.heading", fontSize: 0 },
    p: { fontSize: 3 },
    pre: { p: 2, borderRadius: 4, fontFamily: "monospace", overflowX: "auto" },
    form: { fontFamily: "body", label: { fontWeight: "bold" }, input: { mb: 3 }, textarea: { mb: 3 } },
    table: { width: "100%", borderCollapse: "separate", borderSpacing: 0 },
    th: { textAlign: "left", borderBottomStyle: "solid" },
    td: { textAlign: "left", borderBottomStyle: "solid" },
    iframe: { borderRadius: 4, border: "1px solid black" },
  },
  layout: { header: {}, main: {}, footer: {} },
};

export default theme;
