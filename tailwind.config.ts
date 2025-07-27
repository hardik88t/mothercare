
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
          DEFAULT: "#1e40af",
          light: "#3b82f6",
        },
        secondary: {
          DEFAULT: "#ffffff",
          light: "#f8fafc",
        },
        accent: {
          DEFAULT: "#fce7f3",
          light: "#f3e8ff",
        },
        success: {
          DEFAULT: "#10b981",
          light: "#059669",
        },
      },
    },
  },
  plugins: [],
};
export default config;
