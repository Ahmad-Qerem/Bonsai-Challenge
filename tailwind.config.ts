import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00b289",
        "primary-dark": "#00a37e",
        dark: "#4c4d5f",
        yellow: "#f8db62",
      },
      maxWidth: {
        "22-char": "22ch",
      },
      fontFamily: {
        amerigo: ["var(--font-amerigo)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
