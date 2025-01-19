/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a33100",
        secondary: "#b14a1f",
        third: "#be6139",
        fourth: "#ca7754",
        fifth: "#d68d6e",
        backgroundPrimary: "#121212",
        backgroudSecondary: "#282828",
        backgroundThird: "#3f3f3f",
        backgroundFourth: "#575757",
        backgroundFifth: "#8b8b8b",
      },
    },
    
  },
  plugins: [],
};
