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
        primary: "#D80000",
        secondary: "#FFFFFF",
        text: "#333333",
        accent: "#2E7D32",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
        heading: ["var(--font-gazpacho)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

