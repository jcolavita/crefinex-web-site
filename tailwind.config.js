/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "PURPLE-700": "#1F052A",
        "PURPLE-600": "#3E0F52",
        "PURPLE-500": "#6B218B",
        "PURPLE-400": "#9C34C9",
        "PURPLE-300": "#BE64EC",
        "PURPLE-200": "#D19DF3",
        "PURPLE-100": "#E8D1F9",
        "BLUE-700": "#14093E",
        "BLUE-600": "#311E80",
        "BLUE-500": "#5134C9",
        "BLUE-400": "#7462DF",
        "BLUE-300": "#998EEA",
        "BLUE-200": "#C0BAF2",
        "BLUE-100": "#E8E6FA",
        "MAGENTA-700": "#2A0522",
        "MAGENTA-600": "#5B124C",
        "MAGENTA-500": "#90227A",
        "MAGENTA-400": "#C934AB",
        "MAGENTA-300": "#F064D1",
        "MAGENTA-200": "#F6A8E1",
        "MAGENTA-100": "#FCE1F3",
        "TURQUOISE-700": "#031B21",
        "TURQUOISE-600": "#0C3B46",
        "TURQUOISE-500": "#185E6F",
        "TURQUOISE-400": "#26849B",
        "TURQUOISE-300": "#34ACC9",
        "TURQUOISE-200": "#43D6F9",
        "TURQUOISE-100": "#D6F2FD",
      },
      fontFamily: {
        lexend: ["lexend", "sans-serif"],
      },
      animation: {
        blob: "blob 20s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.05)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "75%": {
            transform: "scale(1.10)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
