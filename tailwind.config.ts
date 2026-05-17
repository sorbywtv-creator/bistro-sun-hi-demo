import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        coal: "#0d0b09",
        espresso: "#17120d",
        sand: "#e8d7b9",
        oat: "#bda98a",
        gold: "#c69b4d",
        smoke: "#9d9488",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 90px -48px rgba(0,0,0,.95)",
        gold: "0 18px 60px -36px rgba(198,155,77,.75)",
      },
      backgroundImage: {
        "warm-radial":
          "radial-gradient(circle at 18% 18%, rgba(198,155,77,.16), transparent 28%), radial-gradient(circle at 82% 0%, rgba(232,215,185,.09), transparent 26%), linear-gradient(180deg, #050505 0%, #0d0b09 44%, #050505 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
