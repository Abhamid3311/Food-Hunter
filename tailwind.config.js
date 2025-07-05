/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#CC3333",
        secondaryGray: "#2A435D",
        bgClr: "#FFF8EE",
        TextWhite: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
