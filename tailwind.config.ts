import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#080b12",
          mid: "#0f1522",
          light: "#1c2740",
          card: "#161f32",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#f0cc5a",
          bright: "#ffe082",
          dim: "#b8922a",
        },
        primary: "#faf8f5",
        secondary: "rgba(250, 248, 245, 0.78)",
        muted: "rgba(250, 248, 245, 0.52)",
        success: "#2dd4a0",
        warning: "#fbbf24",
        attention: "#fb7185",
        chart: {
          blue: "#818cf8",
          purple: "#a78bfa",
        },
        charcoal: "#faf8f5",
        warmWhite: "#080b12",
        softBeige: "rgba(255, 255, 255, 0.06)",
        brass: "#d4af37",
        brassLight: "#f0cc5a",
        deep: "#080b12",
        deepMid: "#0f1522",
        accentGold: "#d4af37",
        accentAmber: "#f0cc5a",
        accentTeal: "#2dd4a0",
        accentViolet: "#a78bfa",
        accentCoral: "#fb7185",
        glass: "rgba(255, 255, 255, 0.07)",
        glassBorder: "rgba(255, 255, 255, 0.12)",
      },
      borderRadius: {
        luxury: "16px",
        glossy: "12px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 0, 0, 0.45)",
        gold: "0 0 28px rgba(212, 175, 55, 0.35)",
        card: "0 4px 12px rgba(0,0,0,0.45), 0 12px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
        cardHover: "0 8px 20px rgba(0,0,0,0.5), 0 16px 40px rgba(0,0,0,0.4), 0 0 48px rgba(212,175,55,0.14)",
        glossyGold: "0 0 28px rgba(212, 175, 55, 0.35)",
        glass: "0 4px 24px rgba(0, 0, 0, 0.4)",
        inset: "0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
