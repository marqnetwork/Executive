import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0b0f12",
          mid: "#111820",
          light: "#1a2332",
          card: "#151c26",
        },
        gold: {
          DEFAULT: "#00f2ea",
          light: "#4dfff8",
          bright: "#00ffcc",
          dim: "#00c4bc",
        },
        accent: {
          DEFAULT: "#00f2ea",
          light: "#4dfff8",
          bright: "#00ffcc",
          dim: "#00c4bc",
        },
        magenta: {
          DEFAULT: "#ff007a",
          light: "#ff4da6",
        },
        primary: "#ffffff",
        secondary: "rgba(255, 255, 255, 0.72)",
        muted: "rgba(255, 255, 255, 0.45)",
        success: "#00f2ea",
        warning: "#fbbf24",
        attention: "#ff007a",
        chart: {
          teal: "#00f2ea",
          magenta: "#ff007a",
          blue: "#4d9fff",
          purple: "#a855f7",
        },
        charcoal: "#ffffff",
        warmWhite: "#0b0f12",
        softBeige: "rgba(255, 255, 255, 0.05)",
        brass: "#00f2ea",
        brassLight: "#4dfff8",
        deep: "#0b0f12",
        deepMid: "#111820",
        accentGold: "#00f2ea",
        accentAmber: "#00ffcc",
        accentTeal: "#00f2ea",
        accentViolet: "#a855f7",
        accentCoral: "#ff007a",
        glass: "rgba(255, 255, 255, 0.05)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
      },
      borderRadius: {
        luxury: "18px",
        glossy: "14px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 0, 0, 0.5)",
        gold: "0 0 28px rgba(0, 242, 234, 0.3)",
        card: "0 4px 12px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        cardHover: "0 8px 20px rgba(0,0,0,0.55), 0 0 40px rgba(0,242,234,0.12)",
        glossyGold: "0 0 28px rgba(0, 242, 234, 0.3)",
        glass: "0 4px 24px rgba(0, 0, 0, 0.45)",
        inset: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        teal: "0 0 24px rgba(0, 242, 234, 0.35)",
        magenta: "0 0 24px rgba(255, 0, 122, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
