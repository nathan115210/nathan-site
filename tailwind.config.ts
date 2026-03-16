import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "rgb(var(--bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--bg-tertiary) / <alpha-value>)",
        },
        surface: {
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
          float: "rgb(var(--surface-float) / <alpha-value>)",
        },
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
        },
        border: {
          subtle: "rgb(var(--border-subtle) / <alpha-value>)",
          strong: "rgb(var(--border-strong) / <alpha-value>)",
        },
        accent: {
          primary: "rgb(var(--accent-primary) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
      },
      borderRadius: {
        sm: "0.625rem",
        md: "0.875rem",
        lg: "1.25rem",
        xl: "1.75rem",
        "2xl": "2.25rem",
        "3xl": "var(--radius-panel)",
      },
      boxShadow: {
        card: "0 24px 64px rgba(var(--shadow-color), 0.42)",
        glow: "0 0 0 1px rgba(var(--accent-soft), 0.18), 0 20px 50px rgba(var(--accent-soft), 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        420: "420ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
