import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002058",
          container: "#1a3673",
          fixed: "#dae2ff",
          "fixed-dim": "#b2c5ff",
        },
        "on-primary": "#ffffff",
        "on-primary-container": "#89a1e5",
        secondary: {
          DEFAULT: "#426900",
          container: "#b8f568",
          fixed: "#b8f568",
          "fixed-dim": "#9dd84f",
        },
        "on-secondary": "#ffffff",
        "on-secondary-container": "#467000",
        surface: {
          DEFAULT: "#f9f9ff",
          bright: "#f9f9ff",
          dim: "#d3daea",
          "container-lowest": "#ffffff",
          "container-low": "#f0f3ff",
          container: "#e7eefe",
          "container-high": "#e2e8f8",
          "container-highest": "#dce2f3",
          variant: "#dce2f3",
        },
        "on-surface": "#151c27",
        "on-surface-variant": "#444650",
        outline: {
          DEFAULT: "#757781",
          variant: "#c4c6d1",
        },
        "inverse-surface": "#2a313d",
        "inverse-on-surface": "#ebf1ff",
        "inverse-primary": "#b2c5ff",
      },
      fontFamily: {
        headline: ["var(--font-inter)", "Inter", "sans-serif"],
        label: ["var(--font-barlow)", "Barlow", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        barlow: ["var(--font-barlow)", "Barlow", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
