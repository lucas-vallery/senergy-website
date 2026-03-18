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
          DEFAULT: "#1c4573",
          dark: "#152f50",
          light: "#2557a0",
        },
        orange: {
          DEFAULT: "#e85d1a",
          dark: "#c44e15",
          light: "#f0763a",
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
