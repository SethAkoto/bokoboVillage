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
        brand: {
          blue: "#2B59C3",
          light: "#E8F0FE",
          accent: "#8AB4F8",
        },
        text: {
          main: "#1F2937",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        // 1. Set Andika as the default sans font (body text)
        sans: ["var(--font-andika)"],
        // 2. Set Concert One as the 'display' font (headings)
        display: ["var(--font-concert)"],
        // 3. Add Days One as a custom utility just in case
        days: ["var(--font-days)"],
      },
    },
  },
  plugins: [],
};
export default config;
