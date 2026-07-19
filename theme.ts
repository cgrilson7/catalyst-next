/**
 * Catalyst design tokens — TypeScript mirror of app/globals.css `:root`.
 * globals.css is the source of truth; keep the two in sync when tweaking.
 */
export const theme = {
  colors: {
    // Brand (from logo swoosh)
    brand: "#5B21B6",
    brandStrong: "#4C1D95",
    accent: "#F97316",
    accentStrong: "#EA580C",
    highlight: "#FACC15",

    // Ink — dark surfaces (hero, contact)
    ink: "#150E2E",
    inkRaised: "#1E1540",
    onInk: "#F5F3FA",
    onInkMuted: "#A9A3C4",

    // Light surfaces
    surface: "#FFFFFF",
    surfaceDim: "#F8F7F5",
    text: "#1A1523",
    textMuted: "#5F5A6B",
    textFaint: "#8F8A9B",
    line: "#E8E5EF",
    lineStrong: "#D6D1E2",
  },

  fonts: {
    sans: 'var(--font-nunito), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  radii: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    pill: "999px",
  },

  // The "signal" — brand gradient used as data ink, not decoration
  gradients: {
    signal: "linear-gradient(100deg, #5B21B6 0%, #F97316 55%, #FACC15 100%)",
  },
} as const;

export type Theme = typeof theme;
