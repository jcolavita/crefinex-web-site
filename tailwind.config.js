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
        "PRIMARY-700": "#1F052A",
        "PRIMARY-600": "#3E0F52",
        "PRIMARY-500": "#6B218B",
        "PRIMARY-400": "#9C34C9",
        "PRIMARY-300": "#BE64EC",
        "PRIMARY-200": "#D19DF3",
        "PRIMARY-100": "#E8D1F9",
        "BLUE-700": "#14093E",
        "BLUE-600": "#311E80",
        "BLUE-500": "#5134C9",
        "BLUE-400": "#7462DF",
        "BLUE-300": "#998EEA",
        "BLUE-200": "#C0BAF2",
        "BLUE-100": "#E8E6FA",
        "MAGENTA-200": "#F6A8E1",
        "ORANGE-600": "#FC5404",
        "GREEN-600": "#66cb10",
        "SKYBLUE-600": "#19B2EB",
        "YELLOW-500": "#FFFF00",
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
