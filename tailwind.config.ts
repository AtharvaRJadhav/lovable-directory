import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303", // The "almost black" Cursor background
        surface: "#0A0A0A",     // Slightly lighter for cards
        border: "#1F1F1F",      // The subtle border color
        primary: "#EDEDED",     // High-contrast white/grey text
        muted: "#888888",       // The specific grey for descriptions
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // This hooks into the Next.js font loader
      },
    },
  },
  plugins: [],
};
export default config;

