export const theme = {
  colors: {
    // Primary gradient colors (from logo swoosh)
    purple: "#5B21B6",
    coral: "#F97316",
    gold: "#FACC15",

    // Accent (from presentation)
    cyan: "#06B6D4",

    // Neutrals
    black: "#000000",
    white: "#FFFFFF",

    // Grays
    gray: {
      50: "#FAFAFA",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
    },
  },

  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // Brand gradient (matches logo swoosh direction)
  gradients: {
    brand: "linear-gradient(135deg, #5B21B6 0%, #F97316 50%, #FACC15 100%)",
    brandReverse: "linear-gradient(-45deg, #FACC15 0%, #F97316 50%, #5B21B6 100%)",
  },
} as const;

export type Theme = typeof theme;
