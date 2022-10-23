/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { claretRed: "#A60A33", darkGreen: "#004F32" },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        DancingScript: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
