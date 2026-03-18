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
        navy: {
          DEFAULT: "#1a3d8c",
          dark: "#122c6b",
          light: "#2a56be",
        },
        orange: {
          DEFAULT: "#7dc142",
          dark: "#5a9030",
          light: "#9ed164",
        },
        lightbg: "#f5f7fa",
        textdark: "#1a1a2e",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "Barlow", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
